import axios from 'axios';


const GET_STUDENTS = 'GET_STUDENTS';


export function getStudents(students) {
  const action = {type: GET_STUDENTS, students}
  return action;
}


export function fetchStudents () {

  return function thunk(dispacth) {
    return axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        const action = getStudents(students)
        dispacth(action);
      })
  }
}



export default function studentsReducer(state = [], action) {
  switch(action.type) {
    case GET_STUDENTS:
      return action.students;
    default:
      return state;
  }
}
