import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


function StudentList (props) {

  document.title = "Students"

  return (
    <div className="container-fluid">
    <table id="campus-list" className="table table-striped" >
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Campus</th>
      </tr>
    </thead>
    <tbody>
      {props.students.map(student => {
        return (
          <tr key={student.id}>
            <td>
            <Link to={`/students/${student.id}`}>{student.name}</Link>
            </td>
            <td>{student.email}</td>
            <td>
            <Link to={`/campuses/${student.campusId}`}>{props.campuses.find(campus => campus.id === student.campusId).name}</Link>
            </td>
          </tr>
        )
      })}
    </tbody>
  </table>
  <Link to="/students/addstudent">
    <button  type="button" className="btn btn-primary btn-lg btn-block">Add New Student</button>
  </Link>
  </div>
  )
}



const mapStateToProps = (state, ownProps) => {
  return {
    students: state.students,
    campuses: state.campuses,
  }
}


export default connect(mapStateToProps)(StudentList);


