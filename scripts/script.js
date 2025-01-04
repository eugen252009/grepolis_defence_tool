// ==UserScript==
// @name         Grepolis Defense Tool
// @namespace    https://grepolis.com
// @version      0.0.1
// @description  Zeigt an, wie stark deine Verteidigung von der optimalen Abwehr abweicht.
// @author       Eugen252009
// @match        https://*.grepolis.com/game/*
// @grant        none
// ==/UserScript==


//sword =,55
//archer=,2
//hoplite=,25

class Logger{
    debug;
    constructor(debug=true){
        this.debug=debug;
    };
    log   = (...message) => { debug ? console.log   ("[GDT]", ...message)          : null};
    dir   = (...message) => { debug ? console.dir   ({GDT: "[GDT]" , message})     : null};
    error = (...message) => { debug ? console.error ("[GDT]", ...message)          : null};
}

const round = (num) => Math.floor(num);

class GDT {
    allUnitsList=Object.keys(GameData.units);

    constructor() {}

    reset(item){
        for (const iter of this.allUnitsList){
            item[iter]=0;
        }
    }

    getAllUnits(data) {
        const allUnits={};
        this.reset(allUnits);

        for (const inner of data){
            for (const models of inner.models){
                if(Game.townId===models.attributes.home_town_id){
                    for(const units of this.allUnitsList){
                        allUnits[units]+=models.attributes[units];
                    }
                }
            }
        }

        return allUnits;
    }

    getAllOrderedUnits(data) {
        const allOrderedUnits={};
        this.reset(allOrderedUnits);

        for (const inner of data){
            for (const models of inner.models){
                allOrderedUnits[models.attributes.unit_type]+=models.attributes.units_left;
            }
        }

        return allOrderedUnits;
    }

    getDifference({sword = 0,archer = 0,hoplite = 0},offset = 0){
        const calc = (amnt,percent) => round(amnt * percent);
        const count = sword + archer + hoplite + offset;
        const needed = {
            archer:calc(count,0.2) - archer,
            sword:calc(count,0.55) - sword,
            hoplite:calc(count,0.25) - hoplite,
        };

        return needed;
    }

    calcDeff(){
        const data = MM.getCollections()


        // GDTLogger.log(data.wnd.collections)

        //Free Townspace for troups
        const currTownId = Game.townId;

        const {max,blocked} = data.Town[0]._byId[currTownId].attributes.population;
        const free = (max - blocked) * 0.9;

        //all available Units and all ordered Units
        const allUnits = GDTMain.getAllUnits(data.Units);
        const allOrderedUnits = GDTMain.getAllOrderedUnits(data.UnitOrder);


        //Adding Ordered Units to the normal
        allUnits.sword += allOrderedUnits.sword;
        allUnits.archer += allOrderedUnits.archer;
        allUnits.hoplite += allOrderedUnits.hoplite;

        //Total diff
        return GDTMain.getDifference(allUnits);
    }
    showTroups(_e,data){
        //skip if the window is not the Barrack
        if (data.context !== "building_barracks") return

        const diff=GDTMain.calcDeff()
        //create The HTML
        const div = document.createElement("div");
        const pSword = document.createElement("p");
        const pArcher = document.createElement("p");
        const pHoplite = document.createElement("p");

        pSword.className="unit unit_order_unit_image unit_icon50x50 sword"
        pSword.style="color:white;font-size:15px;postition:relative;"
        pSword.innerHTML=`<span style="position:absolute;bottom:2px;right:2px;text-shadow: 1px 1px 0 #000;">${diff.sword}</span>`;

        pArcher.className="unit unit_order_unit_image unit_icon50x50 archer"
        pArcher.style="color:white;font-size:15px;postition:relative;"
        pArcher.innerHTML=`<span style="position:absolute;bottom:2px;right:2px;text-shadow: 1px 1px 0 #000;">${diff.archer}</span>`;

        pHoplite.className="unit unit_order_unit_image unit_icon50x50 hoplite"
        pHoplite.style="color:white;font-size:15px;postition:relative;"
        pHoplite.innerHTML=`<span style="position:absolute;bottom:2px;right:2px;text-shadow: 1px 1px 0 #000;">${diff.hoplite}</span>`;

        div.id="GDTTroups";
        div.style="position:absolute; color:black; top:60%; right:0; z-index:1000; font-weight:800;";

        //append everything whats needed
        const showall=false;
        if(diff.sword   > 0 || showall) div.appendChild(pSword);
        if(diff.archer  > 0 || showall) div.appendChild(pArcher);
        if(diff.hoplite > 0 || showall) div.appendChild(pHoplite);

        //Append The Html to the Barrack Window
        data.wnd.getJQElement()[0].appendChild(div)
    }


}

window.GDTMain=new GDT()
window.GDTLogger = new Logger()
window.$.Observer(GameEvents.window.open).subscribe(window.GDTMain.showTroups);
window.$.Observer(GameEvents.town.town_switch).subscribe(window.GDTMain.showTroups);
