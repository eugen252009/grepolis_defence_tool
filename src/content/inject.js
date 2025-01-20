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

// class GDTMarketChecker {
//     alarm = false;
//     timerId = -1
//     audio
//     constructor(mp3File) {
//         this.audio = new Audio(mp3File);
//         this.audio.volume = 0.5;
//     }
//     getIron() {
//         const currentIron = parseInt(document.querySelector("[data-type=sell] [data-type=iron] .current").textContent, 10);
//         const maxIron = parseInt(document.querySelector("[data-type=sell] [data-type=iron] .max").textContent, 10);
//         return maxIron - currentIron;
//     }
//     getStone() {
//         const currentStone = parseInt(document.querySelector("[data-type=sell] [data-type=stone] .current").textContent, 10);
//         const maxStone = parseInt(document.querySelector("[data-type=sell] [data-type=stone] .max").textContent, 10);
//         return maxStone - currentStone;
//     }
//     getWood() {
//         const currentWood = parseInt(document.querySelector("[data-type=sell] [data-type=wood] .current").textContent, 10);
//         const maxWood = parseInt(document.querySelector("[data-type=sell] [data-type=wood] .max").textContent, 10);
//         return maxWood - currentWood;
//     }
//     triggerAlarm() {
//         if (!this.alarm) {
//             this.alarm = true;
//             this.audio.play();
//         }
//     }
//
//
//     async checkMarket() {
//         const townId = Game.townId;
//         const res = await fetch(`https://de155.grepolis.com/game/frontend_bridge?town_id=${townId}&action=execute&h=a9acb2274224e503c08b4b7adca0c445d2db1e80&json=%7B%22model_url%22%3A%22PremiumExchange%22%2C%22action_name%22%3A%22read%22%2C%22town_id%22%3A4462%2C%22nl_init%22%3Atrue%7D&_=${Date.now()}`, {
//             "headers": {
//                 "accept": "text/plain, */*; q=0.01",
//                 "accept-language": "de-DE,de;q=0.8",
//                 "priority": "u=1, i",
//                 "sec-ch-ua": "\"Not A(Brand\";v=\"8\", \"Chromium\";v=\"132\", \"Brave\";v=\"132\"",
//                 "sec-ch-ua-mobile": "?0",
//                 "sec-ch-ua-platform": "\"Linux\"",
//                 "sec-fetch-dest": "empty",
//                 "sec-fetch-mode": "cors",
//                 "sec-fetch-site": "same-origin",
//                 "sec-gpc": "1",
//                 "x-requested-with": "XMLHttpRequest"
//             },
//             "referrer": "https://de155.grepolis.com/game/index?login=1&p=848993142&ts=1737150774",
//             "referrerPolicy": "strict-origin-when-cross-origin",
//             "body": null,
//             "method": "GET",
//             "mode": "cors",
//             "credentials": "include"
//         });
//
//         if (!res.ok) { return }
//
//         const data = await res.json();
//         console.log(data);
//
//         if (data.json.iron.capacity - data.json.iron.stock >= 0) {
//             this.triggerAlarm();
//         }
//         if (data.json.wood.capacity - data.json.wood.stock >= 0) {
//             this.triggerAlarm();
//         }
//         if (data.json.stone.capacity - data.json.stone.stock >= 0) {
//             this.triggerAlarm();
//         }
//     }
//
//     checkForRessources() {
//
//         MarketWindowFactory.openWindow();
//         setTimeout(() => {
//             document.querySelector(".gp_page_caption.js-page-caption.js-page-caption-1").click()
//             this.timerId = setInterval(() => {
//                 if (this.getWood() >= 80) this.triggerAlarm();
//                 if (this.getStone() >= 80) this.triggerAlarm();
//                 if (this.getIron() >= 80) this.triggerAlarm();
//             }, 1000);
//         }, 1000);
//     }
//     test() {
//         const market_check = document.querySelector(".nui_units_box").children[0].children[0];
//
//         const div = document.createElement("div");
//         const bottom = document.createElement("div");
//         const right = document.createElement("div");
//         const left = document.createElement("div");
//
//         right.className = "right";
//         left.className = "left";
//         bottom.className = "bottom";
//
//         const div_input = document.createElement("input");
//         // const ornament = document.querySelector(".nui_units_box.bottom");
//
//         div.style = "background:black;opacity:40%";
//         div_input.type = "checkbox";
//         div.appendChild(div_input);
//
//         div.appendChild(right);
//         div.appendChild(left);
//         div.appendChild(bottom);
//
//         market_check.appendChild(div);
//         //console.log(market_check);
//     }
//     clickGratis() {
//
//     }
// }
