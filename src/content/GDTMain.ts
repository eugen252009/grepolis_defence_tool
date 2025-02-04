import type { Collections, UnitOrder } from "./types/Collections";
import type { Models } from "./types/Models";
import type { UnitsName } from "./types/GameData";

type AllUnitsInterface = Record<UnitsName, number>;

interface BackboneEvent {
    wnd: { getJQElement: Function };
    context: string;
};

const round = (num: number): number => Math.floor(num);


export class GDTFactory {
    UnitStore: { [id: number]: { [K in UnitsName]: number } } = {};
    debug: boolean = false;
    allUnitsList: Array<any> = [];
    collections: Collections = undefined!;
    models: Models = undefined!;
    version = "0.0.4";

    constructor(debug = false) {
        this.debug = debug;
        this.allUnitsList = Object.keys(window.GameData.units);
        if (window.MM.status() === undefined) {
            throw new Error("MM is not Initialized");
        }
        const { models, collections } = window.MM.status();
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

    getAllUnits() {
        const allUnits: { [K in UnitsName]: number } = {} as AllUnitsInterface;
        // die Reset Function setzt alle fehlenden Objekte
        this.reset(allUnits);
        for (const orders of this.collections.UnitOrder) {
            for (const models of orders.models) {
                if (window.Game.townId === models.attributes.home_town_id) {
                    for (const units of this.allUnitsList as UnitsName[]) {
                        allUnits[units] += models.attributes[units];
                    }
                }
            }
        }
        return allUnits satisfies { [K in UnitsName]: number };
    }

    getAllOrderedUnits(unitOrders: UnitOrder[]) {
        const allOrderedUnits = {} as AllUnitsInterface;
        this.reset(allOrderedUnits);

        for (const order of unitOrders) {
            const name = order.getUnitId() as UnitsName;
            const num = order.getCount();
            allOrderedUnits[name] += num;
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

    calcDeff(data = this.collections, townId = window.Game.townId) {
        //@ts-ignore
        const { max, blocked } = data.Town[0]._byId[townId].attributes.population;
        const free = (max - blocked) * 0.9;

        //all available Units and all ordered Units
        const allUnits: AllUnitsInterface = this.getAllUnits() as AllUnitsInterface;
        const allOrderedUnits = window.GDT.getAllOrderedUnits(data.UnitOrder[0].getAllOrders()) as AllUnitsInterface;

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
