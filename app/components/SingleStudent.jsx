import React, { Component } from 'react';
import { Navlink } from 'react-router-dom';
import { connect } from 'react-redux';


function SingleStudent (props) {
    const studentId = Number(props.match.params.id);
    const students = props.students;
    const student = students.find(student => student.id === studentId)
    return (
      <div className="card">
        <div className="card-body">
          {student ?
          <h1>{student.name}</h1> :
          ''
          }
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

