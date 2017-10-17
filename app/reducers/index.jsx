import { combineReducers } from 'redux'
import campuses from './campuses';
import students from './students';
import student from './student';
import campus from './campus';



const reducer = combineReducers({
  campuses,
  students,
  student,
  campus
})



export default reducer;

