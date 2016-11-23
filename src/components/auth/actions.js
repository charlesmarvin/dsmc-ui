import { push } from 'react-router-redux';
import { post } from '../../util/http';
import * as actions from './actionTypes';


const doLogin = (username, password) => {
	return post('/auth/token', {clientId: username, clientSecret: password});
};

const onLoginSuccess = (response) => {
	return {
		type: actions.LOGIN_SUCCESS
	}
};
const onLoginFailure = (error) => {
	return {
		type: actions.LOGIN_FAILURE
	}
};

export const login = (username, password) => {
	return function (dispatch, getState) {
		if (!username) {
			console.log('login action halted: username is required.');
			return;
		}
		if (!password) {
			console.log('login action halted: password is required.');
			return;
		}
		dispatch({type: actions.LOGIN_REQUEST});
    return doLogin(username, password)
	    .then(response => Promise.all([
	  		dispatch(onLoginSuccess(response)),
	  		dispatch(push('/'))
	  	]))
	    .catch(error => dispatch(onLoginFailure(error)));
	};
};

export const verifyAccount = (username, verificationCode) => ({
	type: 'VERIFY_ACCOUNT',
	username,
	verificationCode
});