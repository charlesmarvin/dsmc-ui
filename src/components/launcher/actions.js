import * as actions from './actionTypes';

export const close = () => {
	return {
      type: actions.LAUNCHER_CLOSE
    }
};

export const open = () => {
	return {
      type: actions.LAUNCHER_OPEN
    }
};