import type { CollectionType } from "./types/CollectionType.d.ts";
import type { ModelsType } from "./types/ModelsType.d.ts";

// export class GDTFactory {
//     debug = false;
//     allUnitsList = [];
//     collections = undefined;
//     models = undefined;
//     version = "0.0.4";
//
//     constructor(debug = false) {
//         this.debug = debug;
//         //@ts-ignore
//         this.allUnitsList = Object.keys(window.GameData.units);
//         //@ts-ignore
//         if (window.MM.status() == undefined) throw new Error("MM is not Initialized");
//         //@ts-ignore
//         const { models, collections } = window.MM.status()
//         this.collections = collections;
//         this.models = models;
//         this.init();
//     }
//     init() {
//         this.getAllUnits();
//     }
//
//     reset(item) {
//         for (const iter of this.allUnitsList) {
//             item[iter] = 0;
//         }
//     }
//
//     getAllUnits() {
//         const allUnits = {};
//         this.reset(allUnits);
//         for (const inner of this.collections.UnitOrder) {
//             for (const models of inner.models) {
//                 if (window.Game.townId === models.attributes.home_town_id) {
//                     for (const units of this.allUnitsList) {
//                         allUnits[units] += models.attributes[units];
//                     }
//                 }
//             }
//         }
//         return allUnits;
//     }
//
//     getAllOrderedUnits(data) {
//         const allOrderedUnits = {};
//         this.reset(allOrderedUnits);
//
//         for (const inner of data) {
//             for (const models of inner.models) {
//                 allOrderedUnits[models.attributes.unit_type] += models.attributes.units_left;
//             }
//         }
//
//         return allOrderedUnits;
//     }
//
//     getDifference({ sword = 0, archer = 0, hoplite = 0 }, offset = 0) {
//         const calc = (amnt, percent) => round(amnt * percent);
//         const count = sword + archer + hoplite + offset;
//         const boats_needed = Math.ceil(count / 21);
//         const needed = {
//             archer: calc(count - boats_needed * 5, 0.2) - archer,
//             sword: calc(count - boats_needed * 5, 0.55) - sword,
//             hoplite: calc(count - boats_needed * 5, 0.25) - hoplite, 
//             small_transporter:boats_needed,
//         };
//         return needed;
//     }
// getCustomTroupCount({ sword = 0, archer = 0, hoplite = 0 }, offset = 0) {
//     const calc = (amnt, percent) => round(amnt * percent);
//     const count = sword + archer + hoplite + offset;
//     const needed = {
//         archer: calc(count, 0.2) - archer,
//         sword: calc(count, 0.55) - sword,
//         hoplite: calc(count, 0.25) - hoplite,
//     };
//     return needed;
// }
//     calcDeff(data = this.collections, townId = Game.townId) {
//         const { max, blocked } = data.Town[0]._byId[townId].attributes.population;
//         const free = (max - blocked) * 0.9;
//
//         //all available Units and all ordered Units
//         const allUnits = this.getAllUnits();
//         const allOrderedUnits = window.GDT.getAllOrderedUnits(data.UnitOrder);
//
//         // not really needed but it shows in the log how many troups you are building and how much you have in total.
//         Object.keys(allOrderedUnits).forEach(x => allOrderedUnits[x] !== 0 ? window.GDTLogger.log(x, allOrderedUnits[x], allOrderedUnits[x] + allUnits[x]) : undefined);
//
//
//         //Adding Ordered Units to the normal
//         allUnits.sword += allOrderedUnits.sword;
//         allUnits.archer += allOrderedUnits.archer;
//         allUnits.hoplite += allOrderedUnits.hoplite;
//
//         //Total diff
//         return [this.getDifference(allUnits, free), allUnits, allOrderedUnits];
//     }
//
//     buildImg(type, diff) {
//         const p = document.createElement("p");
//
//         p.innerHTML = `<span style="position:absolute;bottom:2px;right:2px;text-shadow: 1px 1px 0 #000;" class="${type}">${diff}</span>`;
//         p.className = `unit unit_order_unit_image unit_icon50x50 ${type}`
//         p.style = `color:white;font-size:15px;postition:relative;`
//
//         return p;
//     }
//
//     showTroups(data) {
//         //create The HTML
//         const div = document.createElement("div");
//         div.id = "GDTTroups";
//         div.style = "position:absolute; color:black; top:60%; right:0; z-index:1000; font-weight:800;";
//         //Append The HTML to the Barrack Window for later reference
//         data.wnd.getJQElement()[0].appendChild(div);
//     }
//     redraw() {
//         function click(type, num) {
//             const unit = document.querySelector(`#unit_order_tab_${type}`);
//             const unitnum = parseInt(document.querySelector(`#unit_order_max_build_${type}`).textContent, 10);
//             unit.click();
//             const unit_input = document.querySelector("#unit_order_input");
//             if (num <= 0) {
//                 unit_input.value = 0;
//             } else {
//                 unit_input.value = unitnum > num ? num : unitnum;
//             }
//         }
//         const container = document.querySelector("#GDTTroups");
//         if (!container) return;
//
//         const diff = window.GDT.calcDeff();
//         const sword = window.GDT.buildImg("sword", diff[0].sword);
//         const archer = window.GDT.buildImg("archer", diff[0].archer);
//         const hoplite = window.GDT.buildImg("hoplite", diff[0].hoplite);
//         const small_transporter = window.GDT.buildImg("small_transporter", diff[0].small_transporter);
//
//
//         sword.addEventListener("click", () => click("sword", diff[0].sword))
//         archer.addEventListener("click", () => click("archer", diff[0].archer))
//         hoplite.addEventListener("click", () => click("hoplite", diff[0].hoplite))
//
//         //append everything whats needed
//         container.replaceChildren();
//         if (diff[0].sword > 0 || window.GDT.debug) container.appendChild(sword);
//         if (diff[0].archer > 0 || window.GDT.debug) container.appendChild(archer);
//         if (diff[0].hoplite > 0 || window.GDT.debug) container.appendChild(hoplite);
//         if (diff[0].small_transporter > 0 || window.GDT.debug) container.appendChild(small_transporter);
//     }
//
//     attackCityList(data) {
//         const div = document.createElement("div");
//         div.id = "staeteliste";
//         div.style = "width:10px;height:10px;background-color:red;"
//         data.wnd.getJQElement()[0].appendChild(div);
//     }
//
//     getBuilding(event, data) {
//         if (event.type === "window:reload") {
//             window.GDT.redraw();
//             return;
//         }
//
//         switch (data.context) {
//             case "building_barracks":
//                 window.GDT.showTroups(data);
//                 break;
//             case "building_docks":
//                 window.GDT.showTroups(data);
//                 break;
//             case "player_profile":
//                 window.GDT.attackCityList(data)
//                 break;
//             default:
//                 // window.GDTLogger.log(`${ data.context } is not Implemented yet.`)
//                 return;
//         }
//     }
// }
//
//
export class GDTFactory {
    debug: boolean = false;
    allUnitsList: Array<string> = [];
    collection: CollectionType = undefined!;
    models: ModelsType = undefined!;
    version = "0.0.4";

    constructor(debug = false) {
        this.debug = debug;
        //@ts-ignore
        this.allUnitsList = Object.keys(window.GameData.units);
        //@ts-ignore
        if (window.MM.status() == undefined) throw new Error("MM is not Initialized");
        //@ts-ignore
        const { models, collection } = window.MM.status() as { collection: CollectionType, models: ModelsType };
        this.collection = collection;
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
        //Collection or Model is/was not initzialized
        if (this.collection == undefined || this.models == undefined) return;
        const allUnits = {};
        this.reset(allUnits);
        //@ts-ignore
        for (const inner of this.collection.UnitOrder) {
            //@ts-ignore
            for (const models of inner.models) {
                //@ts-ignore
                if (window.Game.townId === models.attributes.home_town_id) {
                    //@ts-ignore
                    for (const units of this.allUnitsList) {
                        //@ts-ignore
                        allUnits[units] += models.attributes[units];
                    }
                }
            }
        }
        return allUnits;
    }
    //
    // getAllOrderedUnits(data) {
    //     const allOrderedUnits = {};
    //     this.reset(allOrderedUnits);
    //
    //     for (const inner of data) {
    //         for (const models of inner.models) {
    //             allOrderedUnits[models.attributes.unit_type] += models.attributes.units_left;
    //         }
    //     }
    //
    //     return allOrderedUnits;
    // }
    //
    // getDifference({ sword = 0, archer = 0, hoplite = 0 }, offset = 0) {
    //     const calc = (amnt, percent) => round(amnt * percent);
    //     const count = sword + archer + hoplite + offset;
    //     const boats_needed = Math.ceil(count / 21);
    //     const needed = {
    //         archer: calc(count - boats_needed * 5, 0.2) - archer,
    //         sword: calc(count - boats_needed * 5, 0.55) - sword,
    //         hoplite: calc(count - boats_needed * 5, 0.25) - hoplite,
    //     };
    //
    //
    //
    //     return needed;
    // }
    //
    calcDeff(data: CollectionType, townId: number) {

        //@ts-ignore
        // const max = e.Town[0].getCurrentTown().getMaxPopulation() * 0.9;
        // const used = e.Town[0].getCurrentTown().getUsedPopulation();

        //@ts-ignore
        const max = data.Town[0]._byId[townId].getMaxPopulation() * 0.9;
        //@ts-ignore
        const used = data.Town[0]._byId[townId].getUsedPopulation();
        console.log(max, used);

        const free = (max - used);

        //all available Units and all ordered Units
        const allUnits = this.getAllUnits();
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
    }
    //
    // buildImg(type, diff) {
    //     const p = document.createElement("p");
    //
    //     p.innerHTML = `<span style = "position:absolute;bottom:2px;right:2px;text-shadow: 1px 1px 0 #000;" class="${type}">${diff}</span>`;
    //     p.className = `unit unit_order_unit_image unit_icon50x50 ${type}`
    //     p.style = `color:white;font-size:15px;postition:relative;`
    //
    //     return p;
    // }
    //
    // showTroups(data) {
    //     // //create The HTML
    //     const div = document.createElement("div");
    //     div.id = "GDTTroups";
    //     div.style = "position:absolute; color:black; top:60%; right:0; z-index:1000; font-weight:800;";
    //     //Append The HTML to the Barrack Window for later reference
    //     data.wnd.getJQElement()[0].appendChild(div);
    // }
    // redraw() {
    //     function click(type, num) {
    //         const unit = document.querySelector(`#unit_order_tab_${type}`);
    //         const unitnum = parseInt(document.querySelector(`#unit_order_max_build_${type}`).textContent, 10);
    //         unit.click();
    //         const unit_input = document.querySelector("#unit_order_input");
    //         if (num <= 0) {
    //             unit_input.value = 0;
    //         } else {
    //             unit_input.value = unitnum > num ? num : unitnum;
    //         }
    //     }
    //     const container = document.querySelector("#GDTTroups");
    //     if (!container) return;
    //
    //     const diff = window.GDT.calcDeff();
    //     const sword = window.GDT.buildImg("sword", diff[0].sword);
    //     const archer = window.GDT.buildImg("archer", diff[0].archer);
    //     const hoplite = window.GDT.buildImg("hoplite", diff[0].hoplite);
    //
    //
    //     sword.addEventListener("click", () => click("sword", diff[0].sword))
    //     archer.addEventListener("click", () => click("archer", diff[0].archer))
    //     hoplite.addEventListener("click", () => click("hoplite", diff[0].hoplite))
    //
    //     //append everything whats needed
    //     container.replaceChildren();
    //     if (diff[0].sword > 0 || window.GDT.debug) container.appendChild(sword);
    //     if (diff[0].archer > 0 || window.GDT.debug) container.appendChild(archer);
    //     if (diff[0].hoplite > 0 || window.GDT.debug) container.appendChild(hoplite);
    // }
    //
    // attackCityList(data) {
    //     const div = document.createElement("div");
    //     div.id = "staeteliste";
    //     div.style = "width:10px;height:10px;background-color:red;"
    //     data.wnd.getJQElement()[0].appendChild(div);
    // }
    //
    // getBuilding(event, data) {
    //     if (event.type === "window:reload") {
    //         console.log(event, data);
    //         window.GDT.redraw();
    //         return;
    //     }
    //     console.log(event, data);
    //
    //     switch (data.context) {
    //         case "building_barracks":
    //             window.GDT.showTroups(data);
    //             break;
    //         case "building_docks":
    //             window.GDT.showTroups(data);
    //             break;
    //         case "player_profile":
    //             window.GDT.attackCityList(data)
    //             break;
    //         default:
    //             // window.GDTLogger.log(`${ data.context } is not Implemented yet.`)
    //             return;
    //     }
    // }
}

// window.onload = () => {
//     //@ts-ignore
//     const units = window.GameData.units;
//     if (!units) return;
//     const GDTDEBUG = true;
//
//     //@ts-ignore
//     window.GDT = new GDTFactory(GDTDEBUG);
//     //@ts-ignore
//     window.GDTLogger = new GDTLoggerFactory(GDTDEBUG);
//     //@ts-ignore
//     // window.GDTMarket = new GDTMarketChecker("https://cdn.grcrt.net/ui/s/alarm.mp3");
//     // window.GDTMarket.checkForRessources();
//
//
//
//     //@ts-ignore
//     window.$.Observer(window.GameEvents.window.open).subscribe(window.GDT.getBuilding);
//     //@ts-ignore
//     window.$.Observer(window.GameEvents.town.town_switch).subscribe(window.GDT.getBuilding);
//     //@ts-ignore
//     window.$.Observer(window.GameEvents.unit.order.change).subscribe(window.GDT.getBuilding);
//     //@ts-ignore
//     window.$.Observer(window.GameEvents.window.reload).subscribe(window.GDT.getBuilding);
//
//     //@ts-ignore
//     window.GDTLogger.log("Installed the script sucessfully!");
// }


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
