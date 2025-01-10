class GDTLoggerFactory {
    constructor(debug = false) {
        this.debug = debug;
    };

    log = (...message) => { this.debug ? console.log("[GDT]", ...message) : null };
    dir = (...message) => { this.debug ? console.dir({ GDT: "[GDT]", message }) : null };
    error = (...message) => { this.debug ? console.error("[GDT]", ...message) : null };
}

const round = (num) => Math.floor(num);

class GDTMain {
    version = "0.0.4";
    allUnitsList = [];

    constructor(allUnitsList, debug = false) {
        this.debug = debug;
        this.allUnitsList = allUnitsList;
    }

    reset(item) {
        for (const iter of this.allUnitsList) {
            item[iter] = 0;
        }
    }

    getAllUnits(data) {
        const allUnits = {};
        this.reset(allUnits);

        for (const inner of data) {
            for (const models of inner.models) {
                if (window.Game.townId === models.attributes.home_town_id) {
                    for (const units of this.allUnitsList) {
                        allUnits[units] += models.attributes[units];
                    }
                }
            }
        }

        return allUnits;
    }

    getAllOrderedUnits(data) {
        const allOrderedUnits = {};
        this.reset(allOrderedUnits);

        for (const inner of data) {
            for (const models of inner.models) {
                allOrderedUnits[models.attributes.unit_type] += models.attributes.units_left;
            }
        }

        return allOrderedUnits;
    }

    getDifference({ sword = 0, archer = 0, hoplite = 0 }, offset = 0) {
        const calc = (amnt, percent) => round(amnt * percent);
        const count = sword + archer + hoplite + offset;
        const boats_needed = Math.ceil(count / 21);
        const needed = {
            archer: calc(count - boats_needed * 5, 0.2) - archer,
            sword: calc(count - boats_needed * 5, 0.55) - sword,
            hoplite: calc(count - boats_needed * 5, 0.25) - hoplite,
        };



        return needed;
    }

    calcDeff() {
        const data = window.MM.getCollections();

        //Free Townspace for troups
        const currTownId = window.Game.townId;

        const { max, blocked } = data.Town[0]._byId[currTownId].attributes.population;
        const free = (max - blocked) * 0.9;

        //all available Units and all ordered Units
        const allUnits = window.GDT.getAllUnits(data.Units);
        const allOrderedUnits = window.GDT.getAllOrderedUnits(data.UnitOrder);

        //not really needed but it shows in the log how many troups you are building and how much you have in total.
        Object.keys(allOrderedUnits).forEach(x => allOrderedUnits[x] !== 0 ? window.GDTLogger.log(x, allOrderedUnits[x], allOrderedUnits[x] + allUnits[x]) : undefined);


        //Adding Ordered Units to the normal
        allUnits.sword += allOrderedUnits.sword;
        allUnits.archer += allOrderedUnits.archer;
        allUnits.hoplite += allOrderedUnits.hoplite;

        //Total diff
        return [window.GDT.getDifference(allUnits, free), allUnits, allOrderedUnits];
    }

    buildImg(type, diff) {
        const p = document.createElement("p");

        p.innerHTML = `<span style = "position:absolute;bottom:2px;right:2px;text-shadow: 1px 1px 0 #000;">${diff}</span> `;
        p.className = `unit unit_order_unit_image unit_icon50x50 ${type} `
        p.style = "color:white;font-size:15px;postition:relative;"

        return p;
    }

    showTroups(_e, data) {
        //skip if the window is not the Barrack
        if (data.context !== "building_barracks") return;

        const diff = window.GDT.calcDeff();

        //create The HTML
        const div = document.createElement("div");
        const sword = window.GDT.buildImg("sword", diff[0].sword);
        const archer = window.GDT.buildImg("archer", diff[0].archer);
        const hoplite = window.GDT.buildImg("hoplite", diff[0].hoplite);

        div.id = "GDTTroups";
        div.style = "position:absolute; color:black; top:60%; right:0; z-index:1000; font-weight:800;";

        //append everything whats needed
        if (diff[0].sword > 0 || window.GDT.debug) div.appendChild(sword);
        if (diff[0].archer > 0 || window.GDT.debug) div.appendChild(archer);
        if (diff[0].hoplite > 0 || window.GDT.debug) div.appendChild(hoplite);

        //Append The HTML to the Barrack Window
        data.wnd.getJQElement()[0].appendChild(div);
    }
    redraw() {
        const container = document.querySelector("#GDTTroups");
        if (container) {
            const diff = window.GDT.calcDeff();

            const sword = window.GDT.buildImg("sword", diff[0].sword);
            const archer = window.GDT.buildImg("archer", diff[0].archer);
            const hoplite = window.GDT.buildImg("hoplite", diff[0].hoplite);

            //append everything whats needed
            container.replaceChildren();
            if (diff[0].sword > 0 || window.GDT.debug) container.appendChild(sword);
            if (diff[0].archer > 0 || window.GDT.debug) container.appendChild(archer);
            if (diff[0].hoplite > 0 || window.GDT.debug) container.appendChild(hoplite);
        }
    }
}

window.GDT = new GDTMain(Object.keys(window.GameData.units), false);
window.GDTLogger = new GDTLoggerFactory(window.GDT.debug);

window.$.Observer(window.GameEvents.window.open).subscribe(window.GDT.showTroups);
window.$.Observer(window.GameEvents.town.town_switch).subscribe(window.GDT.redraw);
window.$.Observer(window.GameEvents.unit.order.change).subscribe(window.GDT.redraw);
window.$.Observer(window.GameEvents.window.reload).subscribe(window.GDT.redraw);

GDTLogger.log("Installed the script sucessfully!");
