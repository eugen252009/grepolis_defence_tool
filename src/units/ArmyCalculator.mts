import { UnitName } from "../types/GameUnits";
import { Army, getEmptyArmy } from "./units.mjs";
import { GameData } from "../GameData.mjs";

export class ArmyCalculator {
    ratio: Partial<Record<UnitName, number>> = {};
    constructor() { }

    setRatio(unitratio: Partial<Army>) {
        return (army: Army, offset: number = 0) => this._calc(unitratio, army, offset);
    }
    _calc(ratio: Partial<Army>, army: Army, offset: number = 0) {
        //adding all Ratios together to get the full ratio x/totalamount

        const totalamnt: number = (Object.keys(ratio) as UnitName[])
            .reduce((acc: number, unitRatio: UnitName) => acc + ((ratio[unitRatio] ?? 0) * GameData.units[unitRatio].population), 0);

        const totalArmy: number = (Object.keys(army) as UnitName[])
            .reduce((acc, unit) => acc + (army[unit] * GameData.units[unit].population), offset);

        const total: Army = getEmptyArmy();

        for (const iter of Object.keys(army) as Array<UnitName>) {
            if (ratio[iter] == undefined) continue;

            // Ratio * Max_Population - Current_Troups
            const unitRatio = ratio[iter] / totalamnt;
            total[iter] = Math.ceil(unitRatio * totalArmy - army[iter]);
        }
        return total;
    }
}
