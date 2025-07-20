import { GDTFactory, GDTLoggerFactory } from "./GDTMain.mjs"


window.onload = () => {
    const units = window.GameData.units;
    if (!units) return;
    const GDTDEBUG = true;

    window.GDT = new GDTFactory(GDTDEBUG);
    window.GDTLogger = new GDTLoggerFactory(GDTDEBUG);


    //@ts-ignore
    window.$.Observer(window.GameEvents.window.open).subscribe(window.GDT.getBuilding);
    //@ts-ignore
    window.$.Observer(window.GameEvents.town.town_switch).subscribe(window.GDT.getBuilding);
    //@ts-ignore
    window.$.Observer(window.GameEvents.unit.order.change).subscribe(window.GDT.getBuilding);
    //@ts-ignore
    window.$.Observer(window.GameEvents.window.reload).subscribe(window.GDT.getBuilding);

    window.GDTLogger.log("Installed the script sucessfully!");
}
