import axios from 'axios';
import { setCampus } from '../store'

const GET_CAMPUSES = 'GET_CAMPUSES';
const GET_CAMPUS = 'GET_CAMPUS';
const REMOVE_CAMPUS = 'REMOVE_CAMPUS';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS';


export function getCampuses(campuses) {
  const action = {type: GET_CAMPUSES, campuses}
  return action;
}

export function getCampus(campus) {
  const action = {type: GET_CAMPUS, campus}
  return action;
}

export function removeCampus(campus) {
  const action = {type: REMOVE_CAMPUS, campus}
  return action;
}

export function updateCampus(campus) {
  const action = {type: UPDATE_CAMPUS, campus}
  return action;
}

export function fetchCampuses () {

  return function thunk(dispatch) {
    return axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
        const action = getCampuses(campuses)
        dispatch(action);
      })
  }
}

export function postCampus(campus, history) {

  return function thunk (dispatch) {
    return axios.post('/api/campuses', campus)
      .then(res => res.data)
      .then(campus => {
        const getAction = getCampus(campus)
        const setAction = setCampus(campus)
        dispatch(setAction)
        dispatch(getAction)
        history.push(`/campuses/${campus.id}`)
      })
  }
}

export function editCampus(campus, history) {

    return function thunk(dispatch) {
      const action = updateCampus(campus)
      dispatch(action);
      return axios.put(`api/campuses/${campus.id}`, campus)
        .then(() => {
          history.push(`/campuses/${campus.id}`)
        })
    }
  }

export function deleteCampus(campus, history) {

  return function thunk(dispatch) {
    const action = removeCampus(campus)
    dispatch(action)
    return axios.delete(`/api/campuses/${campus.id}`)
    .then(() => {
      history.push('/campuses')
    })
  }
}



export default function campusesReducer(state = [], action) {
  switch(action.type){
    case GET_CAMPUSES:
      return action.campuses;
    case GET_CAMPUS:
      return [...state, action.campus];
    case REMOVE_CAMPUS:
     return state.filter(campus => campus.id !== Number(action.campus.id));
    case UPDATE_CAMPUS:
      return state.filter(campus => campus.id !== Number(action.campus.id)).concat(action.campus);
    default:
      return state;
  }
}
