import * as actions from './actionTypes';

const defaultState = {
	firstName: ''
}

export const profile = (state = defaultState, action) => {
  switch (action.type) {
    case actions.PROFILE_SUCCESS:
      return {
        ...state,
        ...action.data,
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

const defaultDashboardState = {
  upcomingSessions: []
}
export const dashboard = (state = defaultDashboardState, action) => {
  switch (action.type) {
    case actions.DASHBOARD_SUCCESS:
      return {
        ...state,
        ...action.data
      }
    default:
      return state
  }
}