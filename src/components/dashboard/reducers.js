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

const defaultDashboardState = {
  upcomingSessions: [
    {
      date: '2016-12-15',
      sessions: [
        {
          id: '1',
          time: '10:15 AM',
          student: 'Lewis Hamilton',
          studentContact: '(888) 555-5555',
          pickupLocation: '1 Infinite Loop, Cupertino, CA 95014',
          instructor: 'Jeffrey Severe'
        }, {
          id: '2',
          time: '3:00 PM',
          student: 'Lewis Hamilton',
          studentContact: '(888) 555-5555',
          pickupLocation: '1 Infinite Loop, Cupertino, CA 95014',
          instructor: 'Melissa Severe'
        }
      ]
    }, {
      date: '2016-12-16',
      sessions: [
        {
          id: '3',
          time: '8:00 AM',
          student: 'Lewis Hamilton',
          studentContact: '(888) 555-5555',
          pickupLocation: '1 Infinite Loop, Cupertino, CA 95014',
          instructor: 'Melissa Severe'
        }
      ]
    }
  ]
}
export const dashboard = (state = defaultDashboardState, action) => {
  switch (action.type) {
    default:
      return state
  }
}