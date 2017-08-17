
export const PRODUCTION = Symbol('PRODUCTION');
export const DIRECTOR = Symbol('DIRECTOR');
export const CAMERAMAN = Symbol('CAMERAMAN');

export function requestProduction(production) {
	return {
		type: PRODUCTION,
		production,
	};
}

export function requestDirector(director) {
	return {
		type: DIRECTOR,
		director,
	};
}

export function requestCameraman(cameraman) {
	return {
		type: CAMERAMAN,
		cameraman,
	};
}
