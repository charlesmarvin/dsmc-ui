import { get } from '../../util/http';
import * as actions from './actionTypes';

const onLoadProfileSuccess = (response) => {
	return {
		type: actions.PROFILE_SUCCESS,
		data: response
	}
};
const onLoadProfileFailure = (error) => {
	return {
		type: actions.PROFILE_FAILURE
	}
};

export const loadProfile = () => {
	return function (dispatch, getState) {
		if (!getState()) {
			return;
		}
		dispatch({type: actions.PROFILE_REQUEST});
    return get('/dashboard/profile')
    	.then(response => dispatch(onLoadProfileSuccess(response)))
	    .catch(error => dispatch(onLoadProfileFailure(error)));
	};
};

const onLoadDashboardSuccess = (response) => {
	return {
		type: actions.DASHBOARD_SUCCESS,
        data: response
	}
};
const onLoadDashboardFailure = (error) => {
	return {
		type: actions.DASHBOARD_FAILURE
	}
};

export const loadDashboard = () => {
	return function (dispatch, getState) {
		if (!getState()) {
			return;
		}
		dispatch({type: actions.DASHBOARD_REQUEST});
    return get("/dashboard")
    	.then(response => dispatch(onLoadDashboardSuccess(response)))
	    .catch(error => dispatch(onLoadDashboardFailure(error)));
	};
};