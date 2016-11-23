import * as actions from './actionTypes';

const defaultState = {
	authenticated: false,
	isLoggingIn: false,
	shouldRedirect: false
}

export const auth = (state = defaultState, action) => {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        authenticated: true,
		    isLoggingIn: false
      }
    case actions.LOGIN_FAILURE:
      return {
        ...state,
        authenticated: false,
		    isLoggingIn: false
      }
		case actions.LOGIN_REQUEST:
			return {
				...state,
				authenticated: false,
				isLoggingIn: true
			}	
		case 'VERIFY_ACCOUNT':
      return {
        ...state,
        authenticated: true
      }
    default:
      return state
  }
}