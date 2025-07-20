import { CustomError, Ok } from "../error/error.mjs";
import { UnitType, UnitOrder } from "../types/CollectionType";
import type { UnitName } from "../types/GameUnits"
export type Army = Record<UnitName, number>;
export function getEmptyArmy() { return { "militia": 0, "sword": 0, "slinger": 0, "archer": 0, "hoplite": 0, "rider": 0, "chariot": 0, "catapult": 0, "minotaur": 0, "manticore": 0, "zyklop": 0, "harpy": 0, "medusa": 0, "centaur": 0, "pegasus": 0, "cerberus": 0, "fury": 0, "griffin": 0, "calydonian_boar": 0, "satyr": 0, "spartoi": 0, "ladon": 0, "godsent": 0, "big_transporter": 0, "bireme": 0, "attack_ship": 0, "demolition_ship": 0, "small_transporter": 0, "trireme": 0, "colonize_ship": 0, "sea_monster": 0, "siren": 0, } };

export class ArmyFactory {
    allUnits: Army = getEmptyArmy();
    Units: Array<Array<UnitType>>;
    UnitOrder: any;

    constructor() {
        //@ts-ignore
        this.Units = window.MM.getCollections().Units;
        //@ts-ignore
        this.UnitOrder = window.MM.getCollections().UnitOrder[0];
    }
    getFullArmy(): CustomError<Army> {
        const newArmy = getEmptyArmy();
        const inTown = this.getUnitsInTown().unwrap() as Army;
        const inOrder = this.getUnitsInOrder().unwrap() as Army;

        //@ts-ignore
        for (const unit of Object.keys(inTown)) {
            //@ts-ignore
            newArmy[unit] += inTown[unit]
        }
        //@ts-ignore
        for (const unit of Object.keys(inOrder)) {
            //@ts-ignore
            newArmy[unit] += inOrder[unit]
        }
        return Ok(newArmy);
    }

    getUnitsInTown(): CustomError<Army> {
        const Army = getEmptyArmy();
        //inside Town and Supporting other Towns
        for (const model of this.Units) {
            for (const befehl of model) {
                //@ts-ignore
                if (window.Game.townId !== befehl.getOriginTownId()) continue
                //@ts-ignore
                const unitsInTown = befehl.getUnits();
                for (const unit of Object.keys(unitsInTown)) {
                    //@ts-ignore
                    Army[unit] += unitsInTown[unit];
                }
            }
        }
        return Ok(Army);
    }
    getUnitsInOrder(): CustomError<Army> {
        const Army = getEmptyArmy();
        const orders = this.UnitOrder.getAllOrders()
        for (const order of orders) {
            const count = order.getUnitsLeft() as number;
            const type = order.getType() as UnitName;

            Army[type] += count;
        }
        return Ok(Army);
    }
}
