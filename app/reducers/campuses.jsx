import axios from 'axios';


const GET_CAMPUSES = 'GET_CAMPUSES';
const GET_CAMPUS = 'GET_CAMPUS';


export function getCampuses(campuses) {
  const action = {type: GET_CAMPUSES, campuses}
  return action;
}

export function getCampus(campus) {
  const action = {type: GET_CAMPUS, campus}
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
  console.log('in thunk creator', campus)
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



export default function campusesReducer(state = [], action) {
  switch(action.type){
    case GET_CAMPUSES:
      return action.campuses;
    case GET_CAMPUS:
      return [...state, action.campus]
    default:
      return state;
  }
}
