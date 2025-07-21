import { ArmyCalculator } from "./units/ArmyCalculator.mjs";
import { GameData } from "./GameData.mjs";

GameData.units.warrior = { population: 5 };

const calc = new ArmyCalculator();
//@ts-ignore
const result = calc.setRatio({ warrior: 1, sword: 5 })({ warrior: 100, sword: 0 }, 5000)

console.log(result);
