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

const defaultStudentState = {
  student: {}
};

export const student = (state=defaultStudentState, action) => {
  switch (action.type) {
    case actions.STUDENT_LOAD_REQUEST:
      return {
        ...state,
        loading: true
      }
    case actions.STUDENT_LOAD_SUCCESS:
      return {
        ...state,
        student: action.data,
        loading: false
      }
    case actions.STUDENT_LOAD_FAILURE:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}