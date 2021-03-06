import React, { Component } from 'react';
import Navbar from './Navbar'
import Home from './Home';
import CampusList from './CampusList';
import SingleCampus from './SingleCampus'
import StudentList from './StudentList';
import SingleStudent from './SingleStudent';
import AddStudent from './AddStudent';
import EditStudent from './EditStudent';
import EditCampus from './EditCampus'
import AddCampus from './AddCampus';
import NotFound from './NotFound';
import { Route, Switch, Redirect } from 'react-router-dom';
import store, { fetchStudents, fetchCampuses } from '../store'

export default class App extends Component {

  componentDidMount () {
    const campusesThunk = fetchCampuses();
    const studentsThunk = fetchStudents();
    store.dispatch(studentsThunk);
    store.dispatch(campusesThunk);
  }

  render() {
    document.title = 'MH Academy of JavaScript'
    return (
      <div className="container-fluid bg-light">
      <Navbar />
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path="/campuses" component={CampusList} />
          <Route exact path="/students" component={StudentList} />
          <Route path="/students/addstudent" component={AddStudent} />
          <Route exact path="/students/:id/edit" component={EditStudent} />
          <Route exact path="/students/:id" component={SingleStudent} />
          <Route exact path="/campuses/addcampus" component={AddCampus} />
          <Route exact path="/campuses/:id/edit" component={EditCampus} />
          <Route exact path="/campuses/:id" component={SingleCampus} />
          <Route to="/*"  component={NotFound} />
        </Switch>
      </main>
      </div>
    )
  }
}

