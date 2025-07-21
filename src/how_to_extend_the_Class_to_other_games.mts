import { ArmyCalculator } from "./units/ArmyCalculator.mjs";
import { GameData } from "./GameData.mjs";

//@ts-ignore
GameData.units.warrior = { population: 5 };

const calc = new ArmyCalculator();
//@ts-ignore
const result = calc.setRatio({ warrior: 1, sword: 5 })({ warrior: 100, sword: 0 }, 5000)

//result :
//{
//   militia: 0,
//   sword: 2750,
//   slinger: 0,
//   archer: 0,
//   hoplite: 0,
//   rider: 0,
//   chariot: 0,
//   catapult: 0,
//   minotaur: 0,
//   manticore: 0,
//   zyklop: 0,
//   harpy: 0,
//   medusa: 0,
//   centaur: 0,
//   pegasus: 0,
//   cerberus: 0,
//   fury: 0,
//   griffin: 0,
//   calydonian_boar: 0,
//   satyr: 0,
//   spartoi: 0,
//   ladon: 0,
//   godsent: 0,
//   big_transporter: 0,
//   bireme: 0,
//   attack_ship: 0,
//   demolition_ship: 0,
//   small_transporter: 0,
//   trireme: 0,
//   colonize_ship: 0,
//   sea_monster: 0,
//   siren: 0,
//   warrior: 450,
// }

console.log(result);
