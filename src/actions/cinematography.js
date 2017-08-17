import config from './../config';

export const SCENE = Symbol('SCENE');
export const SHOT = Symbol('SHOT');
export const TAKE = Symbol('TAKE');

export function requestScene(scene) {
	return {
		type: SCENE,
		scene,
	};
}

export function requestShot(shot) {
	return {
		type: SHOT,
		shot,
	};
}

export function requestTake(take) {
	return {
		type: TAKE,
		take,
	};
}
