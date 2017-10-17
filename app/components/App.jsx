import React, { Component } from 'react';
import Navbar from './Navbar'
import CampusList from './CampusList';
import StudentList from './StudentList';
import SingleStudent from './SingleStudent';
import AddStudent from './AddStudent';
import Home from './Home';
import { Route, Switch, Redirect } from 'react-router-dom';
import store, { fetchStudents, fetchCampuses } from '../store'

export default class App extends Component {

  componentDidMount() {
    const campusesThunk = fetchCampuses();
    const studentsThunk = fetchStudents();
    store.dispatch(studentsThunk);
    store.dispatch(campusesThunk);

  }

  render() {
    return (
      <div className='container-fluid'>
      <Navbar />
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path="/campuses" component={CampusList} />
          <Route exact path="/students" component={StudentList} />
          <Route path="/students/addstudent" component={AddStudent} />
          <Route path="/students/:id" component={SingleStudent} />
          <Redirect to="/" />
        </Switch>
      </main>
      </div>
    )
  }
}

