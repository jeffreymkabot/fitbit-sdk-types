declare module 'power' {
	interface Battery
		extends EventTarget<{
				change: Event;
			}> {
		readonly chargeLevel: number;
		readonly charging: boolean;
		onchange: (event: Event) => void;
		readonly timeUntilFull: number;
	}
	export const battery: Battery;

	interface ChargerEventMap {
		change: Event;
	}
	interface Charger
		extends EventTarget<{
				change: Event;
			}> {
		readonly connected: boolean;
		onchange: (event: Event) => void;
		powerIsGood: boolean | undefined;
	}
	export const charger: Charger;
}
