import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCampus } from '../store'


function CampusList (props) {
  document.title = "Campuses"

  return (
    <div className ="d-flex justify-content-center">
      <div className="container-fluid col-lg-10">
        <table id="campus-list" className="table table-striped" >
        <thead>
          <tr>
            <th>Campus Name</th>
            <th>Number of Students</th>
          </tr>
        </thead>
        <tbody>
          {props.campuses.map(campus => {
            return (
            <tr key={campus.id}>
              <td scope="row">
              <Link onClick={() => props.handleSetCampus(campus)}to={`/campuses/${campus.id}`}>{campus.name}</Link>
              </td>
              <td>{props.students.filter(student => student.campusId === campus.id).length || 0}</td>
            </tr>)
          })}
        </tbody>
      </table>
      <Link to="/campuses/addcampus">
        <button  type="button" className="btn btn-primary btn-lg btn-block">Add Campus</button>
      </Link>
    </div>
  </div>
  )
}



const mapStateToProps = (state, ownProps) => {
  return {
    students: state.students,
    campuses: state.campuses,
    campus: state.campus
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSetCampus: (campus) => {
      dispatch(setCampus(campus));
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CampusList))


