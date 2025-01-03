class Logger{
    debug;
    constructor(debug=true){
        this.debug=debug;
    };
    log   =(...message) => {debug?console.log   ("[GDT]",...message):null};
    dir   =(...message) => {debug?console.dir   ({from:"[GDT]",message}):null};
    error =(...message) => {debug?console.error ("[GDT]",...message):null};
}

const round= (num) => Math.floor(num);

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

        for (const inner of data.wnd.collections.units.models){
            if (Game.townId===inner.attributes.home_town_id){
                for(const unit of this.allUnitsList){
                    allUnits[unit]+=inner.attributes[unit];
                }
            }
        }
        return allUnits;
    }

    getAllOrderedUnits(data) {
        const allOrderedUnits={};
        this.allUnitsList=Object.keys(GameData.units);
        this.reset(allOrderedUnits);
        for (const order of data.wnd.collections.unit_orders.models){
            allOrderedUnits[order.attributes.unit_type]+=order.attributes.units_left;
        }
        return allOrderedUnits;
    }
    getDifference(units,offset=0){
        const count=units.sword+units.archer+units.hoplite+offset
        const needed ={
            archer:round(count*0.2),
            sword:round(count*0.55),
            hoplite:round(count*0.25)
        }
        return {archer:needed.archer-units.archer,sword:needed.sword-units.sword,hoplite:needed.hoplite-units.hoplite};
    }
}

window.GDTMain=new GDT()
window.GDTLogger = new Logger()

window.$.Observer(GameEvents.window.open).subscribe((e,data)=>{
    try {

        if (data.context==="building_barracks"){
            const currTownId=Game.townId;
            const {max,blocked} = data.wnd.collections.towns._byId[currTownId].attributes.population;
            const free=max-blocked;
            const allUnits=GDTMain.getAllUnits(data);
            const allOrderedUnits=GDTMain.getAllOrderedUnits(data);
            const diff=GDTMain.getDifference(allUnits);

            const div=document.createElement("div");
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


            div.id="tests";
            div.style="position:absolute; color:black; top:55%; right:0; z-index:1000; font-weight:800;";

            div.appendChild(pSword);
            div.appendChild(pArcher);
            div.appendChild(pHoplite);

            const end = data.wnd.getJQElement()[0];
            end.appendChild(div)
        }
    }catch(e){
        GDTLogger.error(e)
    }
});
