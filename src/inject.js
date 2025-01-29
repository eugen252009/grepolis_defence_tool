class GDTFactory {
    debug = false;
    allUnitsList = [];
    collection = undefined;
    models = undefined;
    version = "0.0.4";

    constructor(debug = false) {
        this.debug = debug;
        //@ts-ignore
        this.allUnitsList = Object.keys(window.GameData.units);
        //@ts-ignore
        if (window.MM.status() == undefined) throw new Error("MM is not Initialized");
        //@ts-ignore
        const { models, collection } = window.MM.status()
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
        this.collection?.Units[0].map(x => {
            console.log(x.home_town_id)
        })
        console.log(this.collection)
        const allUnits = {};
        this.reset(allUnits);

        // for (const inner of this.collection.UnitOrder) {
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

    calcDeff(data, townId) {
        //@ts-ignore
        const { max, blocked } = data.Town[0]._byId[townId].attributes.population;
        const free = (max - blocked) * 0.9;

        //all available Units and all ordered Units
        const allUnits = this.getAllUnits();
        const allOrderedUnits = window.GDT.getAllOrderedUnits(data.UnitOrder);

        // not really needed but it shows in the log how many troups you are building and how much you have in total.
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
        function click(type, num) {
            const unit = document.querySelector(`#unit_order_tab_${type}`);
            const unitnum = parseInt(document.querySelector(`#unit_order_max_build_${type}`).textContent, 10);
            unit.click();
            const unit_input = document.querySelector("#unit_order_input");
            if (num <= 0) {
                unit_input.value = 0;
            } else {
                unit_input.value = unitnum > num ? num : unitnum;
            }
        }
        const container = document.querySelector("#GDTTroups");
        if (!container) return;

        const diff = window.GDT.calcDeff();
        const sword = window.GDT.buildImg("sword", diff[0].sword);
        const archer = window.GDT.buildImg("archer", diff[0].archer);
        const hoplite = window.GDT.buildImg("hoplite", diff[0].hoplite);


        sword.addEventListener("click", () => click("sword", diff[0].sword))
        archer.addEventListener("click", () => click("archer", diff[0].archer))
        hoplite.addEventListener("click", () => click("hoplite", diff[0].hoplite))

        //append everything whats needed
        container.replaceChildren();
        if (diff[0].sword > 0 || window.GDT.debug) container.appendChild(sword);
        if (diff[0].archer > 0 || window.GDT.debug) container.appendChild(archer);
        if (diff[0].hoplite > 0 || window.GDT.debug) container.appendChild(hoplite);
    }

    attackCityList(data) {
        const div = document.createElement("div");
        div.id = "staeteliste";
        div.style = "width:10px;height:10px;background-color:red;"
        data.wnd.getJQElement()[0].appendChild(div);
    }

    getBuilding(event, data) {
        if (event.type === "window:reload") {
            console.log(event, data);
            window.GDT.redraw();
            return;
        }
        console.log(event, data);

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
                // window.GDTLogger.log(`${ data.context } is not Implemented yet.`)
                return;
        }
    }
}

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



window.onload = () => {
    const units = window.GameData.units;
    if (!units) return;
    const GDTDEBUG = true;

    window.GDT = new GDTFactory(GDTDEBUG);
    window.GDTLogger = new GDTLoggerFactory(GDTDEBUG);
    window.GDTMarket = new GDTMarketChecker("https://cdn.grcrt.net/ui/s/alarm.mp3");

    // window.GDTMarket.checkForRessources();


    window.$.Observer(window.GameEvents.window.open).subscribe(window.GDT.getBuilding);
    window.$.Observer(window.GameEvents.town.town_switch).subscribe(window.GDT.getBuilding);
    window.$.Observer(window.GameEvents.unit.order.change).subscribe(window.GDT.getBuilding);
    window.$.Observer(window.GameEvents.window.reload).subscribe(window.GDT.getBuilding);

    window.GDTLogger.log("Installed the script sucessfully!");
}

class GDTMarketChecker {
    alarm = false;
    timerId = -1
    audio
    constructor(mp3File) {
        this.audio = new Audio(mp3File);
        this.audio.volume = 0.5;
    }
    getIron() {
        const currentIron = parseInt(document.querySelector("[data-type=sell] [data-type=iron] .current").textContent, 10);
        const maxIron = parseInt(document.querySelector("[data-type=sell] [data-type=iron] .max").textContent, 10);
        return maxIron - currentIron;
    }
    getStone() {
        const currentStone = parseInt(document.querySelector("[data-type=sell] [data-type=stone] .current").textContent, 10);
        const maxStone = parseInt(document.querySelector("[data-type=sell] [data-type=stone] .max").textContent, 10);
        return maxStone - currentStone;
    }
    getWood() {
        const currentWood = parseInt(document.querySelector("[data-type=sell] [data-type=wood] .current").textContent, 10);
        const maxWood = parseInt(document.querySelector("[data-type=sell] [data-type=wood] .max").textContent, 10);
        return maxWood - currentWood;
    }
    triggerAlarm() {
        if (!this.alarm) {
            this.alarm = true;
            this.audio.play();
        }
    }


    async checkMarket() {
        const townId = Game.townId;
        const res = await fetch(`https://de155.grepolis.com/game/frontend_bridge?town_id=${townId}&action=execute&h=a9acb2274224e503c08b4b7adca0c445d2db1e80&json=%7B%22model_url%22%3A%22PremiumExchange%22%2C%22action_name%22%3A%22read%22%2C%22town_id%22%3A4462%2C%22nl_init%22%3Atrue%7D&_=${Date.now()}`, {
            "headers": {
                "accept": "text/plain, */*; q=0.01",
                "accept-language": "de-DE,de;q=0.8",
                "priority": "u=1, i",
                "sec-ch-ua": "\"Not A(Brand\";v=\"8\", \"Chromium\";v=\"132\", \"Brave\";v=\"132\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Linux\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "sec-gpc": "1",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": "https://de155.grepolis.com/game/index?login=1&p=848993142&ts=1737150774",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "include"
        });

        if (!res.ok) { return }

        const data = await res.json();
        console.log(data);

        if (data.json.iron.capacity - data.json.iron.stock >= 0) {
            this.triggerAlarm();
        }
        if (data.json.wood.capacity - data.json.wood.stock >= 0) {
            this.triggerAlarm();
        }
        if (data.json.stone.capacity - data.json.stone.stock >= 0) {
            this.triggerAlarm();
        }
    }

    checkForRessources() {

        MarketWindowFactory.openWindow();
        setTimeout(() => {
            document.querySelector(".gp_page_caption.js-page-caption.js-page-caption-1").click()
            this.timerId = setInterval(() => {
                if (this.getWood() >= 80) this.triggerAlarm();
                if (this.getStone() >= 80) this.triggerAlarm();
                if (this.getIron() >= 80) this.triggerAlarm();
            }, 1000);
        }, 1000);
    }
    test() {
        const market_check = document.querySelector(".nui_units_box").children[0].children[0];

        const div = document.createElement("div");
        const bottom = document.createElement("div");
        const right = document.createElement("div");
        const left = document.createElement("div");

        right.className = "right";
        left.className = "left";
        bottom.className = "bottom";

        const div_input = document.createElement("input");
        // const ornament = document.querySelector(".nui_units_box.bottom");

        div.style = "background:black;opacity:40%";
        div_input.type = "checkbox";
        div.appendChild(div_input);

        div.appendChild(right);
        div.appendChild(left);
        div.appendChild(bottom);

        market_check.appendChild(div);
        //console.log(market_check);
    }
    clickGratis() {

    }
}
