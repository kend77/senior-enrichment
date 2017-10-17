const SET_STUDENT = 'SET_STUDENT';

export function setStudent(student) {
  const action = {type: SET_STUDENT, student}
  return action;
}

export default function studentReducer(state = {}, action) {
  switch(action.type) {
    case SET_STUDENT:
      return action.student;
    default:
      return state;
  }
}
