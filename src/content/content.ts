import { GDTFactory } from "./GDTMain";
import { GDTLoggerFactory } from "./GDTLogger";
import { GameData } from "./types/GameData";

declare global {
	interface Window {
		$: { Observer: Function };
		GDT: GDTFactory;
		GDTLogger: GDTLoggerFactory;
		Game: { townId: number };
		GameData: GameData;
		MM: {
			status: Function;
		};
		GameEvents: {
			window: { open: string, reload: string }
			town: { town_switch: string }
			unit: { order: { change: string } }
		}
	}
}


window.onload = () => {
	//@ts-ignore
	const units = window.GameData.units;
	if (!units) return;
	const GDTDEBUG = true;

	window.GDT = new GDTFactory(GDTDEBUG) as GDTFactory;
	window.GDTLogger = new GDTLoggerFactory(GDTDEBUG);

	window.$.Observer(window.GameEvents.window.open).subscribe(window.GDT.getBuilding);
	window.$.Observer(window.GameEvents.town.town_switch).subscribe(window.GDT.getBuilding);
	window.$.Observer(window.GameEvents.unit.order.change).subscribe(window.GDT.getBuilding);
	window.$.Observer(window.GameEvents.window.reload).subscribe(window.GDT.getBuilding);

	window.GDTLogger.log("Info", "Installed the script sucessfully!");
};

