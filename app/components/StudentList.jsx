import React, { Component } from 'react';
import { Link, Navlink } from 'react-router-dom';
import { connect } from 'react-redux';


function StudentList (props) {

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
              <td>{props.campuses.find(campus => campus.id === student.campusId).name}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
    </div>
    )
  }



const mapStateToProps = (state, ownProps) => {
  return {
    students: state.students,
    campuses: state.campuses
  }
}

export default connect(mapStateToProps)(StudentList);


