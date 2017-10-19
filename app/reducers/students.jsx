import axios from 'axios';


const GET_STUDENTS = 'GET_STUDENTS';
const GET_STUDENT = 'GET_STUDENT';
const REMOVE_STUDENT = 'REMOVE_STUDENT';
const REMOVE_STUDENTS = 'REMOVE_STUDENTS';


export function getStudents(students) {
  const action = {type: GET_STUDENTS, students}
  return action;
}

export function getStudent(student) {
  const action = {type: GET_STUDENT, student}
  return action;
}

export function removeStudent(student) {
  const action = {type: REMOVE_STUDENT, student}
  return action;
}

export function removeStudents(students) {
  const action = {type: REMOVE_STUDENTS, students}
  return action;
}




export function fetchStudents () {

  return function thunk(dispatch) {
    return axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        const action = getStudents(students)
        dispatch(action);
      })
  }
}


export function postStudent (student, history) {

  return function thunk(dispatch) {
    return axios.post('/api/students', student)
      .then(res => res.data)
      .then(student => {
        const action = getStudent(student)
        dispatch(action)
        history.push('/students')
      })
  }
}

export function editStudent(student, history) {

  return function thunk(dispatch) {
    return axios.put(`api/students/${student.id}`, student)
      .then(res => {
        const studentsThunk = fetchStudents()
        dispatch(studentsThunk)
        history.push(`/students/${student.id}`)
      })
  }
}

export function deleteStudent(student, history) {

  return function thunk(dispatch) {
    const action = removeStudent(student);
    dispatch(action)
    return axios.delete(`/api/students/${student.id}`)
      .then(res => res.data)
      .then(student => {
        history.push('/students')
      })
  }
}



export default function studentsReducer(state = [], action) {

  switch(action.type) {
    case GET_STUDENTS:
      return action.students;
    case GET_STUDENT:
      return [...state, action.student];
    case REMOVE_STUDENT:
      return state.filter(student => student.id !== Number(action.student.id))
    case REMOVE_STUDENTS:
      const ids = action.students.map(student => student.id)
      return state.filter(student => ids.indexOf(student.id) === -1)
    default:
      return state;
  }
}
