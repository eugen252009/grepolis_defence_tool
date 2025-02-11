import type { Collections, UnitOrder, AllUnitsInterface } from "./types/Collections";
import type { Models } from "./types/Models";
import type { UnitsName } from "./types/GameData";


interface BackboneEvent {
    wnd: { getJQElement: Function };
    context: string;
};

const round = (num: number): number => Math.floor(num);

export class GDTFactory {
    UnitStore: { [id: number]: { [K in UnitsName]: number } } = {};
    debug: boolean = false;
    allUnitsList: Array<UnitsName> = [];
    collections: Collections = undefined!;
    models: Models = undefined!;
    version = "0.0.4";

    constructor(debug = false) {
        this.debug = debug;
        this.allUnitsList = Object.keys(window.GameData.units) as Array<UnitsName>;
        if (window.MM.status() === undefined) {
            throw new Error("MM is not Initialized");
        } const { models, collections } = window.MM.status();
        this.collections = collections;
        this.models = models;
        this.init();
    }

    init() {
        this.getAllUnits();
    }

    reset(item: any) {
        for (const iter of this.allUnitsList) {
            item[iter] = 0;
        }
    }
    getEmptyUnitObj(): AllUnitsInterface {
        return { harpy: 0, fury: 0, ladon: 0, rider: 0, satyr: 0, siren: 0, sword: 0, archer: 0, bireme: 0, medusa: 0, zyklop: 0, centaur: 0, chariot: 0, godsent: 0, griffin: 0, hoplite: 0, militia: 0, pegasus: 0, slinger: 0, spartoi: 0, trireme: 0, catapult: 0, cerberus: 0, minotaur: 0, manticore: 0, attack_ship: 0, sea_monster: 0, colonize_ship: 0, big_transporter: 0, calydonian_boar: 0, demolition_ship: 0, small_transporter: 0 };
    }

    getAllUnits() {
        // die Reset Function setzt alle fehlenden Objekte auf 0
        const allUnits = this.getEmptyUnitObj();
        const AllOrders = this.collections.Units[0].getUnitsInTown();

        for (const unit of this.collections.Units[0].models) {
            //@ts-ignore
            console.log(unit.areTownUnits());
            // const type = order.getType() as UnitsName;
            // const num = order.getCount();
            // allUnits[type] = num;
        }

        return allUnits;
    }

    getAllOrderedUnits() {
        // Get Units from current Town
        const allOrderedUnits = this.getEmptyUnitObj();

        for (const order of this.collections.UnitOrder[0].getAllOrders()) {
            const type = order.getType() as UnitsName;
            const num = order.getCount();
            allOrderedUnits[type] = num;
        }

        return allOrderedUnits;
    }

    getDifference({ sword = 0, archer = 0, hoplite = 0 }, offset = 0) {
        const calc = (amnt: number, percent: number) => round(amnt * percent);
        const count = sword + archer + hoplite + offset;
        const boats_needed = Math.ceil(count / 21);
        const needed = {
            archer: calc(count - boats_needed * 5, 0.2) - archer,
            sword: calc(count - boats_needed * 5, 0.55) - sword,
            hoplite: calc(count - boats_needed * 5, 0.25) - hoplite,
        };
        return needed;
    }

    calcDeff(data = this.collections) {
        const currentTown = data.Town[0].getCurrentTown();
        const max = currentTown.getMaxPopulation();
        const blocked = currentTown.getUsedPopulation();
        const free = (max - blocked) * 0.9;

        //all available Units and all ordered Units
        const allUnits = this.getAllUnits();
        const allOrderedUnits = this.getAllOrderedUnits();

        // not really needed but it shows in the log how many troups you are building and how much you have in total.
        Object.keys(allOrderedUnits).forEach(
            unit => {
                //@ts-ignore
                if (allOrderedUnits[unit] !== 0) {
                    //@ts-ignore
                    window.GDTLogger.log("Info", unit, allOrderedUnits[unit], allOrderedUnits[unit] + allUnits[unit]);
                }
            });


        //Adding Ordered Units to the normal
        allUnits.sword += allOrderedUnits.sword;
        allUnits.archer += allOrderedUnits.archer;
        allUnits.hoplite += allOrderedUnits.hoplite;

        //Total diff
        return [this.getDifference(allUnits, free), allUnits, allOrderedUnits];
    }

    buildImg(type: UnitsName, diff: number) {
        const p = document.createElement("p");
        const inner = document.createElement("p");

        inner.classList.add(type);
        inner.textContent = diff.toString();

        inner.style.position = "absolute";
        inner.style.margin = "0";
        inner.style.bottom = "2px";
        inner.style.right = "2px";
        inner.style.textShadow = "1px 1px 0 #000";

        p.className = `unit unit_order_unit_image unit_icon50x50 ${type}`;
        p.style.color = "white";
        p.style.fontSize = "15px";
        p.style.position = "relative";

        p.appendChild(inner);
        return p;
    }

    showTroups(data: BackboneEvent) {
        //create The HTML
        const div = document.createElement("div");
        div.id = "GDTTroups";

        div.style.position = "absolute";
        div.style.color = "black";
        div.style.top = "60%";
        div.style.right = "0";
        div.style.zIndex = "1000";
        div.style.fontWeight = "800";

        //Append The HTML to the Barrack Window for later reference
        data.wnd.getJQElement()[0].appendChild(div);
    }
    redraw() {
        function click(type: UnitsName, num: number) {
            const unit = document.querySelector(`#unit_order_tab_${type}`) as HTMLElement;
            const unitnum = parseInt(document.querySelector(`#unit_order_max_build_${type}`)?.textContent ?? "", 10);
            unit.click();
            const unit_input = document.querySelector("#unit_order_input") as HTMLInputElement;
            if (num <= 0) {
                unit_input.value = "0";
            } else {
                unit_input.value = unitnum > num ? num.toString() : unitnum.toString();
            }
        }
        const container = document.querySelector("#GDTTroups");
        if (!container) return;

        const diff = window.GDT.calcDeff();
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

    attackCityList(data: any) {
        const div = document.createElement("div");
        div.id = "staeteliste";

        div.style.width = "10px";
        div.style.height = "10px";
        div.style.backgroundColor = "red";

        data.wnd.getJQElement()[0].appendChild(div);
    }

    getBuilding(event: { type: string }, data: BackboneEvent) {
        if (event.type === "window:reload") {
            window.GDT.redraw();
            return;
        }

        switch (data.context) {
            case "building_barracks":
                window.GDT.showTroups(data);
                break;
            case "building_docks":
                window.GDT.showTroups(data);
                break;
            case "player_profile":
                window.GDT.attackCityList(data);
                break;
            default:
                window.GDTLogger.log("Info", `${data.context} is not Implemented yet.`);
                return;
        }
    }

    getVersion() {
        return this.version;
    }
}
