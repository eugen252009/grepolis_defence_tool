import { Army, ArmyFactory } from "./units/units.mjs"
import { Err, Ok, CustomError, ERRORTYPES } from "./error/error.mjs";
import { UnitName } from "./types/GameUnits";
import { ArmyCalculator } from "./units/ArmyCalculator.mjs"


export const Ratios = {
    GOLDEN_RATIO: { sword: 550, archer: 250, hoplite: 250, small_transporter: 47 },
    // GOLDEN_RATIO: { sword: 550, archer: 250, hoplite: 250 },
    OFF_RATIO: { slinger: 2000, attack_ship: 50, small_transporter: 127 },
} as Record<string, Partial<Army>>;


let SELECTEDRATIO: Partial<Army> = Ratios.GOLDEN_RATIO;

export class GDTFactory {
    debug: boolean = false;
    version = "0.0.4";
    army: ArmyFactory;
    armyCalculator: ArmyCalculator;
    constructor(debug = false) {
        this.debug = debug;
        console.log("GDT INIT")
        this.army = new ArmyFactory();
        this.armyCalculator = new ArmyCalculator();
    }

    reset(item: any) {
        //@ts-ignore
        for (const iter of this.allUnitsList) {
            item[iter] = 0;
        }
    }



    calcDeff(army: Partial<Army>): CustomError<Army> {
        //@ts-ignore
        const collection = MM.getCollections();
        if (collection == undefined) return Err(ERRORTYPES.COLLECTION_NOT_FOUND);

        const town = collection.Town[0].getCurrentTown();

        const free = town.getAvailablePopulation();
        let full_army = army;
        if (full_army == undefined) {
            const full_army_Result = this.army.getFullArmy();
            if (full_army_Result.isErr()) return Err(ERRORTYPES.NOT_DEFINED, "Truppen konnten nicht geladen werden.");
            full_army = full_army_Result.unwrap();
        }
        const diff = this.armyCalculator.setRatio(SELECTEDRATIO)(full_army as Army, free);

        return Ok(diff)
    }

    buildImg(type: UnitName, diff: number) {
        const p = document.createElement("p");

        p.innerHTML = `<span style = "position:absolute;bottom:2px;right:2px;text-shadow: 1px 1px 0 #000;" class="${type}">${diff}</span>`;
        p.className = `unit unit_order_unit_image unit_icon50x50 ${type}`
        //@ts-ignore
        p.style = `color:white;font-size:15px;postition:relative;`

        return p;
    }

    showTroups(data: any) {
        // //create The HTML
        const div = document.createElement("div");
        div.id = "GDTTroups";
        //@ts-ignore
        div.style = "position:absolute; color:black; top:60%; right:0; z-index:1000; font-weight:800;";
        //Append The HTML to the Barrack Window for later reference
        //@ts-ignore
        data.wnd.getJQElement()[0].appendChild(div);
    }

    redraw() {
        function click(type: UnitName, num: number) {
            const unit = document.querySelector(`#unit_order_tab_${type}`);

            const unitnum = parseInt(document.querySelector(`#unit_order_max_build_${type}`)?.textContent!, 10);
            //@ts-ignore
            unit.click();
            const unit_input = document.querySelector("#unit_order_input");
            if (num <= 0) {
                //@ts-ignore
                unit_input.value = 0;
            } else {
                //@ts-ignore
                unit_input.value = unitnum > num ? num : unitnum;
            }
        }
        const container = document.querySelector("#GDTTroups");
        if (!container) return Err(ERRORTYPES.NOT_DEFINED, "CONTAINER NOT FOUND!");

        //@ts-ignore
        const diff = window.GDT.calcDeff();
        if (diff.isErr()) return;
        const data = diff.unwrap();

        const showOnDisplay = [];
        for (const unit of Object.keys(data)) {
            //@ts-ignore
            if (!Object.keys(SELECTEDRATIO).includes(unit)) continue
            // if (data[unit] <= 0) continue
            const img = this.buildImg(unit as UnitName, data[unit])
            img.addEventListener("click", () => click(unit as UnitName, data[unit]))
            showOnDisplay.push(img)
        }



        //append everything whats needed
        container.replaceChildren();
        showOnDisplay.forEach(x => container.appendChild(x))
    }
    //
    // attackCityList(data) {
    //     const div = document.createElement("div");
    //     div.id = "staeteliste";
    //     div.style = "width:10px;height:10px;background-color:red;"
    //     data.wnd.getJQElement()[0].appendChild(div);
    // }

    getBuilding(event: { type: string }, data: any) {
        if (event.type === "window:reload") {
            // console.log(event, data);
            //@ts-ignore
            window.GDT.redraw();
            return;
        }
        console.log(event, data);

        switch (data.context) {
            case "building_barracks":
                //@ts-ignore
                window.GDT.showTroups(data);
                break;
            case "building_docks":
                //@ts-ignore
                window.GDT.showTroups(data);
                break;
            case "player_profile":
                //@ts-ignore
                // window.GDT.attackCityList(data)
                break;
            default:
                // window.GDTLogger.log(`${ data.context } is not Implemented yet.`)
                return;
        }
    }
}



export class GDTLoggerFactory {
    debug = false;
    loghistory = [];
    constructor(debug = false) {
        this.debug = debug;
        this.loghistory = [];
    };
    //@ts-ignore
    log = (...message: any[]) => { this.loghistory.push(message); this.debug ? console.log("[GDT]", ...message) : null };
    //@ts-ignore
    dir = (...message: any[]) => { this.loghistory.push(message); this.debug ? console.dir({ GDT: "[GDT]", message }) : null };
    //@ts-ignore
    error = (...message: any[]) => { this.loghistory.push(message); this.debug ? console.error("[GDT]", ...message) : null };
}

const round = (num: number): number => Math.floor(num);
