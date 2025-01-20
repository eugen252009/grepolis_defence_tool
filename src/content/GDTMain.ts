import type { Collections } from "./types/Collections";
import type { Models } from "./types/Models";
import type { UnitsName } from "./types/GameData";
import { EventData } from "./types/EventData";

export class GDTFactory {
    debug: boolean = false;
    allUnitsList: Array<UnitsName> = [];
    collections: Collections = undefined!;
    models: Models = undefined!;
    version = "0.0.4";

    constructor(debug = false) {
        this.debug = debug;
        //@ts-ignore
        this.allUnitsList = Object.keys(window.GameData.units) as Array<UnitsName>;
        //@ts-ignore
        if (window.MM.status() === undefined) throw new Error("MM is not Initialized");
        //@ts-ignore
        const { models, collections } = window.MM.status() as { collections: CollectionType, models: ModelsType };
        this.collections = collections;
        this.models = models;
    }

    reset(item: Array<UnitsName>) {
        for (const iter of this.allUnitsList) {
            //@ts-ignore
            item[iter] = 0;
        }
    }
    getEmptyUnitsObject() {
        return {
            militia: 0, sword: 0, slinger: 0, archer: 0, hoplite: 0, rider: 0, chariot: 0, catapult: 0, minotaur: 0, manticore: 0, zyklop: 0, harpy: 0, medusa: 0, centaur: 0, pegasus: 0, cerberus: 0, fury: 0, griffin: 0, calydonian_boar: 0, satyr: 0, spartoi: 0, ladon: 0, godsent: 0, big_transporter: 0, bireme: 0, attack_ship: 0, demolition_ship: 0, small_transporter: 0, trireme: 0, colonize_ship: 0, sea_monster: 0, siren: 0
        };
    }
    getAllUnits() {
        const unitObject = this.getEmptyUnitsObject();
        for (const models of this.collections.Units) {
            for (const units of models.models) {
                //@ts-ignore
                if (units.attributes.home_town_id === window.Game.townId) {
                    for (const unitName of this.allUnitsList) {
                        unitObject[unitName] += units.attributes[unitName];
                    }
                }
            }
        }
        return unitObject;
    }

    getAllOrderedUnits(data: any) {
        console.log(data);
        const allOrderedUnits = this.getEmptyUnitsObject();
        // for (const inner of data) {
        //     for (const models of inner.models) {
        //         allOrderedUnits[models.attributes.unit_type] += models.attributes.units_left;
        //     }
        // }

        return allOrderedUnits;
    }

    getDifference({ sword = 0, archer = 0, hoplite = 0 }, offset = 0) {
        // const calc = (amnt, percent) => round(amnt * percent);
        // const count = sword + archer + hoplite + offset;
        // const boats_needed = Math.ceil(count / 21);
        // const needed = {
        //     archer: calc(count - boats_needed * 5, 0.2) - archer,
        //     sword: calc(count - boats_needed * 5, 0.55) - sword,
        //     hoplite: calc(count - boats_needed * 5, 0.25) - hoplite,
        // };
        //
        //
        //
        // return needed;
    }

    calcDeff(data: Models, townId: number) {
        console.log(data);
        //@ts-ignore
        const { max, blocked } = data.Town[0]._byId[townId].attributes.population;
        const free = (max - blocked) * 0.9;
        console.log(free, max, blocked);
        //all available Units and all ordered Units
        // const allUnits = this.getAllUnits();
        // const allOrderedUnits = window.GDT.getAllOrderedUnits(data.UnitOrder);

        //not really needed but it shows in the log how many troups you are building and how much you have in total.
        // Object.keys(allOrderedUnits).forEach(x => allOrderedUnits[x] !== 0 ? window.GDTLogger.log(x, allOrderedUnits[x], allOrderedUnits[x] + allUnits[x]) : undefined);
        //
        //
        // //Adding Ordered Units to the normal
        // allUnits.sword += allOrderedUnits.sword;
        // allUnits.archer += allOrderedUnits.archer;
        // allUnits.hoplite += allOrderedUnits.hoplite;
        //
        // //Total diff
        // return [window.GDT.getDifference(allUnits, free), allUnits, allOrderedUnits];
        return [this.getEmptyUnitsObject(), this.getEmptyUnitsObject()] as const;
    }
    //
    buildImg(unitType: string, offset: number) {
        const p = document.createElement("p");
        const span = document.createElement("span");

        span.className = `${unitType}`;
        span.style.setProperty("position", "absolute");
        span.style.setProperty("bottom", "2px");
        span.style.setProperty("right", "2px");
        span.style.setProperty("text-shadow", "1px 1px 0 #000");
        span.textContent = `${offset}`;


        p.className = `unit unit_order_unit_image unit_icon50x50 ${unitType}`;

        p.style.setProperty("position", "relative");
        p.style.setProperty("color", "white");
        p.style.setProperty("font-size", "15px");

        p.appendChild(span);
        return p;
    }

    addContainerToWindow(data: EventData) {
        //create The Container
        const div = document.createElement("div");
        div.id = "GDTTroups";

        div.style.setProperty("position", "absolute");
        div.style.setProperty("color", "black");
        div.style.setProperty("top", "60%");
        div.style.setProperty("right", "0");
        div.style.setProperty("z-index", "1000");
        div.style.setProperty("font-weight", "800");

        //@ts-ignore
        data.wnd.getJQElement()[0].appendChild(div);
    }

    redraw() {
        function click(type: UnitsName, num: number) {
            const unit = document.querySelector(`#unit_order_tab_${type}`);
            const unitnum = parseInt(document.querySelector(`#unit_order_max_build_${type}`)?.textContent ?? "0", 10);
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
        if (!container) return;

        const diff = window.GDT.calcDeff(this.collections.UnitOrder[0], window.Game.townId);
        const sword = window.GDT.buildImg("sword", diff[0].sword);
        const archer = window.GDT.buildImg("archer", diff[0].archer);
        const hoplite = window.GDT.buildImg("hoplite", diff[0].hoplite);


        sword.addEventListener("click", () => click("sword", diff[0].sword));
        archer.addEventListener("click", () => click("archer", diff[0].archer));
        hoplite.addEventListener("click", () => click("hoplite", diff[0].hoplite));

        //append everything whats needed
        container.replaceChildren();
        if (diff[0].sword > 0 || window.GDT.debug) container.appendChild(sword);
        if (diff[0].archer > 0 || window.GDT.debug) container.appendChild(archer);
        if (diff[0].hoplite > 0 || window.GDT.debug) container.appendChild(hoplite);
    }

    // attackCityList(data) {
    //     const div = document.createElement("div");
    //     div.id = "staeteliste";
    //     div.style = "width:10px;height:10px;background-color:red;"
    //     data.wnd.getJQElement()[0].appendChild(div);
    // }

    getBuilding(event: Event, data: EventData) {
        if (event.type === "window:reload") {
            // window.GDT.redraw();
            return;
        }
        switch (data.context) {
            case "building_barracks":
                console.log("open Barracks");
                window.GDT.addContainerToWindow(data);
                break;
            case "building_docks":
                console.log("open Docks");
                // window.GDT.showTroups(data);
                break;
            case "player_profile":
                console.log("open Player Profile");
                // window.GDT.attackCityList(data)
                break;
            default:
                window.GDTLogger.log(`${data.context} is not Implemented yet.`);
                return;
        }
    }
}
