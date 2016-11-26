import * as actions from './actionTypes';
const defaultStudentsState = {
  students: []
};
export const students = (state=defaultStudentsState, action) => {
  switch (action.type) {
    case actions.STUDENTS_LOAD_REQUEST:
      return {
        ...state,
        loading: true
      }
    case actions.STUDENTS_LOAD_SUCCESS:
      return {
        ...state,
        students: action.data,
        loading: false
      }
    case actions.STUDENTS_LOAD_FAILURE:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}