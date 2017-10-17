const SET_CAMPUS = 'SET_CAMPUS';

export function setCampus(campus) {
  const action = {type: SET_CAMPUS, campus}
  return action;
}

export default function campusReducer(state = {}, action) {
  switch(action.type) {
    case SET_CAMPUS:
      return action.campus;
    default:
      return state;
  }
}
