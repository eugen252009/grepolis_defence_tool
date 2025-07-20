import { ArmyCalculator } from "../src/units/ArmyCalculator.mjs"
import { Army } from "../src/units/units.mts";
import { Ratios } from "../src/GDTMain.mjs"

import { test, expect } from "bun:test"


test("Testing various Ratios", () => {
	let calc: ArmyCalculator = new ArmyCalculator();

	// Single normal Ratios
	expect(calc.setRatio({ slinger: 2000 })({ slinger: 2000 } as Army, 0).slinger).toBe(0)
	expect(calc.setRatio({ slinger: 1 })({ slinger: 2000 } as Army, 100).slinger).toBe(100)
	expect(calc.setRatio({ slinger: 2 })({ slinger: 0 } as Army, 2000).slinger).toBe(2000)
	expect(calc.setRatio({ slinger: 3 })({ slinger: 1000 } as Army, 1000).slinger).toBe(1000)

	// Multiple Units
	expect(calc.setRatio({ slinger: 1000, hoplite: 1000 })({ slinger: 1000, hoplite: 1000 } as Army, 1000).slinger).toBe(500)
	expect(calc.setRatio({ slinger: 1000, hoplite: 1000 })({ slinger: 1000, hoplite: 1000 } as Army, 1000).hoplite).toBe(500)

	expect(calc.setRatio({ slinger: 1000, hoplite: 1000 })({ slinger: 1100, hoplite: 900 } as Army, 1000).slinger).toBe(400)
	expect(calc.setRatio({ slinger: 1000, hoplite: 1000 })({ slinger: 1100, hoplite: 900 } as Army, 1000).hoplite).toBe(600)

	expect(calc.setRatio({ slinger: 2000, hoplite: 1000 })({ slinger: 1000, hoplite: 0 } as Army, 500).slinger).toBe(0)
	expect(calc.setRatio({ slinger: 2000, hoplite: 1000 })({ slinger: 1000, hoplite: 0 } as Army, 500).hoplite).toBe(500)

	expect(calc.setRatio({ slinger: 20, hoplite: 5 })({ slinger: 2000, hoplite: 0 } as Army, 500).slinger).toBe(0)
	expect(calc.setRatio({ slinger: 20, hoplite: 5 })({ slinger: 2000, hoplite: 0 } as Army, 500).hoplite).toBe(500)
	//same Ratio - different Numbers
	expect(calc.setRatio({ slinger: 200, hoplite: 50 })({ slinger: 2000, hoplite: 0 } as Army, 500).hoplite).toBe(500)
	expect(calc.setRatio({ slinger: 200, hoplite: 50 })({ slinger: 2000, hoplite: 0 } as Army, 500).hoplite).toBe(500)

	expect(calc.setRatio({ sword: 55, hoplite: 25, archer: 20 })({ sword: 0, hoplite: 0, archer: 0 } as Army, 100).sword).toBe(56)
	expect(calc.setRatio({ sword: 55, hoplite: 25, archer: 20 })({ sword: 0, hoplite: 0, archer: 0 } as Army, 100).archer).toBe(20)
	expect(calc.setRatio({ sword: 55, hoplite: 25, archer: 20 })({ sword: 0, hoplite: 0, archer: 0 } as Army, 100).hoplite).toBe(25)

	expect(calc.setRatio({ sword: 55, hoplite: 25, archer: 20 })({ sword: 0, hoplite: 0, archer: 0 } as Army, 500).sword).toBe(275)
	expect(calc.setRatio({ sword: 55, hoplite: 25, archer: 20 })({ sword: 0, hoplite: 0, archer: 0 } as Army, 500).archer).toBe(100)
	expect(calc.setRatio({ sword: 55, hoplite: 25, archer: 20 })({ sword: 0, hoplite: 0, archer: 0 } as Army, 500).hoplite).toBe(125)

	//Real World Test - These are Tests from the Game directly

	const testarmy = {
		sword: 389,
		archer: 380,
		hoplite: 230,
		chariot: 5,
		calydonian_boar: 1,
		big_transporter: 14,
		attack_ship: 1,
		small_transporter: 86,
	} as Partial<Army>;

	expect(calc.setRatio(Ratios.GOLDEN_RATIO)(testarmy as Army, 800).sword).toBe(629)
	expect(calc.setRatio(Ratios.GOLDEN_RATIO)(testarmy as Army, 800).archer).toBe(83)
	expect(calc.setRatio(Ratios.GOLDEN_RATIO)(testarmy as Army, 800).hoplite).toBe(233)

	//Ausbildung von 11 Soldaten
	expect(calc.setRatio(Ratios.GOLDEN_RATIO)({ ...testarmy, sword: 400 } as Army, 789).sword).toBe(618)
	expect(calc.setRatio(Ratios.GOLDEN_RATIO)({ ...testarmy, sword: 400 } as Army, 789).archer).toBe(83)
	expect(calc.setRatio(Ratios.GOLDEN_RATIO)({ ...testarmy, sword: 400 } as Army, 789).hoplite).toBe(233)

	//Ausbildung von 125 Bogenschützen 
	expect(calc.setRatio(Ratios.GOLDEN_RATIO)({ ...testarmy, archer: 505 } as Army, 675).sword).toBe(629)
	expect(calc.setRatio(Ratios.GOLDEN_RATIO)({ ...testarmy, archer: 505 } as Army, 675).archer).toBe(-42)
	expect(calc.setRatio(Ratios.GOLDEN_RATIO)({ ...testarmy, archer: 505 } as Army, 675).hoplite).toBe(233)
});
