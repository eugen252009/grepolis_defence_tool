class GDTLoggerFactory {

    constructor(debug = false) {
        this.debug = debug;
        this.loghistory = [];
    };

    log = (...message) => { this.loghistory.push(message); this.debug ? console.log("[GDT]", ...message) : null };
    dir = (...message) => { this.loghistory.push(message); this.debug ? console.dir({ GDT: "[GDT]", message }) : null };
    error = (...message) => { this.loghistory.push(message); this.debug ? console.error("[GDT]", ...message) : null };
}

const round = (num) => Math.floor(num);

class GDTFactory {
    version = "0.0.4";

    constructor(debug = false) {
        this.debug = debug;
        this.allUnitsList = Object.keys(window.GameData.units);
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

        p.innerHTML = `<span style = "position:absolute;bottom:2px;right:2px;text-shadow: 1px 1px 0 #000;" class="${type}">${diff}</span>`;
        p.className = `unit unit_order_unit_image unit_icon50x50 ${type}`
        p.style = `color:white;font-size:15px;postition:relative;`

        return p;
    }

    showTroups(data) {
        // //create The HTML
        const div = document.createElement("div");
        div.id = "GDTTroups";
        div.style = "position:absolute; color:black; top:60%; right:0; z-index:1000; font-weight:800;";
        //Append The HTML to the Barrack Window for later reference
        data.wnd.getJQElement()[0].appendChild(div);
    }
    redraw() {
        function click(event) {
            let type = event.target.className.split(" ").at(-1);
            const unit = document.querySelector(`.${type}`)
            unit.click()
        }
        const container = document.querySelector("#GDTTroups");
        if (!container) return;

        const diff = window.GDT.calcDeff();
        const sword = window.GDT.buildImg("sword", diff[0].sword);
        const archer = window.GDT.buildImg("archer", diff[0].archer);
        const hoplite = window.GDT.buildImg("hoplite", diff[0].hoplite);


        sword.addEventListener("click", click)
        archer.addEventListener("click", click)
        hoplite.addEventListener("click", click)

        //append everything whats needed
        container.replaceChildren(sword, archer, hoplite);
        if (diff[0].sword > 0 || window.GDT.debug) container.appendChild(sword);
        if (diff[0].archer > 0 || window.GDT.debug) container.appendChild(archer);
        if (diff[0].hoplite > 0 || window.GDT.debug) container.appendChild(hoplite);
    }

    attackCityList(data) {
        const div = document.createElement("div");
        div.id = "staeteliste";
        data.wnd.getJQElement()[0].appendChild(div);
    }
    getBuilding(_e, data) {
        if (_e.type === "window:reload") {
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
                window.GDT.attackCityList(data)
                break;
            default:
                // window.GDTLogger.log(`${data.context} is not Implemented yet.`)
                return;
        }
    }
}

window.onload = () => {
    const units = window.GameData.units;
    if (!units) return;
    const GDTDEBUG = true;

    window.GDT = new GDTFactory(GDTDEBUG);
    window.GDTLogger = new GDTLoggerFactory(window.GDT.debug);

    window.$.Observer(window.GameEvents.window.open).subscribe(window.GDT.getBuilding);
    window.$.Observer(window.GameEvents.town.town_switch).subscribe(window.GDT.getBuilding);
    window.$.Observer(window.GameEvents.unit.order.change).subscribe(window.GDT.getBuilding);
    window.$.Observer(window.GameEvents.window.reload).subscribe(window.GDT.getBuilding);

    window.GDTLogger.log("Installed the script sucessfully!");
}
