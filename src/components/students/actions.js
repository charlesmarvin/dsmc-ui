import { get } from '../../util/http';
import * as actions from './actionTypes';

const onLoadSuccess = (response) => {
	return {
		type: actions.STUDENTS_LOAD_SUCCESS,
		data: response
	}
};
const onLoadFailure = (error) => {
	return {
		type: actions.STUDENTS_LOAD_FAILURE
	}
};

export const load = () => {
	return function (dispatch, getState) {
      dispatch({type: actions.STUDENTS_LOAD_REQUEST});
      return get('/students')
    	.then(response => dispatch(onLoadSuccess(response)))
	    .catch(error => dispatch(onLoadFailure(error)));
	};
};

export const create = (student) => {
	
};

export const save = (student) => {
	
};

