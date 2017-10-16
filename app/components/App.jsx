import React, { Component } from 'react';
import Navbar from './Navbar'
import CampusList from './CampusList';
import StudentList from './StudentList';
import SingleStudent from './SingleStudent';
import Home from './Home';
import { Route, Switch, Redirect } from 'react-router-dom';
import store, { fetchStudents, fetchCampuses } from '../store'

export default class App extends Component {

  componentDidMount() {
    const campusesThunk = fetchCampuses();
    const studentsThunk = fetchStudents();
    store.dispatch(campusesThunk);
    store.dispatch(studentsThunk);
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
          <Route path="/students/:id" component={SingleStudent} />
        </Switch>
      </main>
      </div>
    )
  }
}

