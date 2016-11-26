import * as actions from './actionTypes';

export const launcher = (state={open: false}, action) => {
  switch (action.type) {
    case actions.LAUNCHER_OPEN:
      return {
        ...state,
        open: true
      }
      case '@@router/LOCATION_CHANGE':
    case actions.LAUNCHER_CLOSE:
      return {
        ...state,
        open: false
      }
    default:
      return state
  }
}

