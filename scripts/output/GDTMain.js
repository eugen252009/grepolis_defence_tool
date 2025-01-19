class GDTFactory {
    constructor(debug = false) {
        this.debug = false;
        this.allUnitsList = [];
        this.collection = undefined;
        this.models = undefined;
        this.version = "0.0.4";
        this.debug = debug;
        //@ts-ignore
        this.allUnitsList = Object.keys(window.GameData.units);
        //@ts-ignore
        if (window.MM.status() == undefined)
            throw new Error("MM is not Initialized");
        //@ts-ignore
        const { models, collection } = window.MM.status();
        this.collection = collection;
        this.models = models;
        this.init();
    }
    init() {
        this.getAllUnits();
    }
    reset(item) {
        for (const iter of this.allUnitsList) {
            item[iter] = 0;
        }
    }
    getAllUnits() {
        var _a;
        (_a = this.collection) === null || _a === void 0 ? void 0 : _a.Units[0].map(x => {
            console.log(x.home_town_id);
        });
        const allUnits = {};
        // this.reset(allUnits);
        // for (const inner of data) {
        //     for (const models of inner.models) {
        //         if (window.Game.townId === models.attributes.home_town_id) {
        //             for (const units of this.allUnitsList) {
        //                 allUnits[units] += models.attributes[units];
        //             }
        //         }
        //     }
        // }
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
    calcDeff(data, townId) {
        //@ts-ignore
        const { max, blocked } = data.Town[0]._byId[townId].attributes.population;
        const free = (max - blocked) * 0.9;
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
}
window.onload = () => {
    //@ts-ignore
    const units = window.GameData.units;
    if (!units)
        return;
    const GDTDEBUG = true;
    //@ts-ignore
    window.GDT = new GDTFactory(GDTDEBUG);
    //@ts-ignore
    window.GDTLogger = new GDTLoggerFactory(GDTDEBUG);
    //@ts-ignore
    window.GDTMarket = new GDTMarketChecker("https://cdn.grcrt.net/ui/s/alarm.mp3");
    // window.GDTMarket.checkForRessources();
    //@ts-ignore
    window.$.Observer(window.GameEvents.window.open).subscribe(window.GDT.getBuilding);
    //@ts-ignore
    window.$.Observer(window.GameEvents.town.town_switch).subscribe(window.GDT.getBuilding);
    //@ts-ignore
    window.$.Observer(window.GameEvents.unit.order.change).subscribe(window.GDT.getBuilding);
    //@ts-ignore
    window.$.Observer(window.GameEvents.window.reload).subscribe(window.GDT.getBuilding);
    //@ts-ignore
    window.GDTLogger.log("Installed the script sucessfully!");
};
export {};
