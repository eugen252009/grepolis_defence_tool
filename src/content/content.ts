import { GDTFactory } from "./GDTMain";
import { GDTLoggerFactory } from "./GDTLogger";
import { GameData } from "./types/GameData";

declare global {
	interface Window {
		GDT: GDTFactory;
		GDTLogger: GDTLoggerFactory;
		Game: { townId: number };
		GameData: GameData;
		MM: {
			status: Function;
		};
		GameEvents: {}
	}
}

const round = (num: number): number => Math.floor(num);

window.onload = () => {
	//@ts-ignore
	const units = window.GameData.units;
	if (!units) return;
	const GDTDEBUG = true;

	window.GDT = new GDTFactory(GDTDEBUG) as GDTFactory;
	window.GDTLogger = new GDTLoggerFactory(GDTDEBUG);

	//@ts-ignore
	// window.$.Observer(window.GameEvents.window.open).subscribe(console.log);
	//@ts-ignore
	// window.$.Observer(window.GameEvents.town.town_switch).subscribe(console.log);
	//@ts-ignore
	// window.$.Observer(window.GameEvents.unit.order.change).subscribe(console.log);
	//@ts-ignore
	// window.$.Observer(window.GameEvents.window.reload).subscribe(console.log);

	window.$.Observer(window.GameEvents.window.open).subscribe(window.GDT.getBuilding);
	// //@ts-ignore
	// window.$.Observer(window.GameEvents.town.town_switch).subscribe(window.GDT.getBuilding);
	// //@ts-ignore
	// window.$.Observer(window.GameEvents.unit.order.change).subscribe(window.GDT.getBuilding);
	// //@ts-ignore
	// window.$.Observer(window.GameEvents.window.reload).subscribe(window.GDT.getBuilding);

	//@ts-ignore
	window.GDTLogger.log("Installed the script sucessfully!");
};

function claimFarm() {

}
