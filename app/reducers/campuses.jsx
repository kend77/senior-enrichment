import axios from 'axios';


const GET_CAMPUSES = 'GET_CAMPUSES';
const GET_CAMPUS = 'GET_CAMPUS';
const REMOVE_CAMPUS = 'REMOVE_CAMPUS'


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
        const campusesThunk = fetchCampuses()
        dispatch(campusesThunk)
        history.push('/campuses')
      })
  }
}

export function editCampus(campus, history) {

    return function thunk(dispatch) {
      return axios.put(`api/campuses/${campus.id}`, campus)
        .then(res => {
          const campusesThunk = fetchCampuses()
          dispatch(campusesThunk)
          history.push(`/campuses/${campus.id}`)
        })
    }
  }

export function deleteCampus(campus, history) {

  return function thunk(dispatch) {
    const action = removeCampus(campus)
    dispatch(action)
    return axios.delete(`/api/campuses/${campus.id}`)
    .then(res => res.data)
    .then(campus => {
      history.push('/campuses')
    })
  }
}



export default function campusesReducer(state = [], action) {
  switch(action.type){
    case GET_CAMPUSES:
      return action.campuses;
    case GET_CAMPUS:
      return [...state, action.campus]
    case REMOVE_CAMPUS:
     return state.filter(campus => campus.id !== Number(action.campus.id))
    default:
      return state;
  }
}
