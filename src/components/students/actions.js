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

const onLoadStudentSuccess = (response) => {
	return {
		type: actions.STUDENT_LOAD_SUCCESS,
		data: response
	}
};
const onLoadStudentFailure = (error) => {
	return {
		type: actions.STUDENT_LOAD_FAILURE
	}
};

export const loadStudent = (id) => {
	return function (dispatch, getState) {
      dispatch({type: actions.STUDENT_LOAD_REQUEST});
      return get(`/students/${id}`)
    	.then(response => dispatch(onLoadStudentSuccess(response)))
	    .catch(error => dispatch(onLoadStudentFailure(error)));
	};
};

export const create = (student) => {
	
};

export const save = (student) => {
	
};

