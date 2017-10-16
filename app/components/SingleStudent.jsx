import React, { Component } from 'react';
import { Navlink } from 'react-router-dom';
import { connect } from 'react-redux';


function SingleStudent (props) {
    const studentId = Number(props.match.params.id);
    const students = props.students;
    const student = students.find(student => student.id === studentId)
    const campus = props.campuses.find(campus => campus.id === student.campusId)
    console.log(student)
    return (
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">{student.name}</h1>
          <h4 className="card-subtitle mb-2 text-muted">{campus.name}</h4>
        </div>
      </div>
    )
  }



const mapStateToProps = (state, ownProps) => {
  return {
    students: state.students,
    campuses: state.campuses
  }
}

export default connect(mapStateToProps)(SingleStudent);

