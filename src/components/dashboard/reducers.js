import * as actions from './actionTypes';

const defaultState = {
	firstName: ''
}

export const profile = (state = defaultState, action) => {
  switch (action.type) {
    case actions.PROFILE_SUCCESS:
      return {
        ...state,
        ...action.profile,
        loadingProfile: false
      }
    case actions.PROFILE_FAILURE:
      return { 
      	...state,
      	loadingProfile: false
      }
		case actions.PROFILE_REQUEST:
			return {
				...state,
				loadingProfile: true
			}
    default:
      return state
  }
}