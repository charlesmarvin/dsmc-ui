import { get } from '../../util/http';
import * as actions from './actionTypes';


const doLoadProfile = () => {
	return get('/dashboard/profile');
};

const onLoadProfileSuccess = (response) => {
	return {
		type: actions.PROFILE_SUCCESS,
		profile: response
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
    return doLoadProfile()
    	.then(response => dispatch(onLoadProfileSuccess(response)))
	    .catch(error => dispatch(onLoadProfileFailure(error)));
	};
};