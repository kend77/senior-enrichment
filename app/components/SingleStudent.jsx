import React, { Component } from 'react';
import { Navlink } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteStudent } from '../store'


function SingleStudent (props) {
    const studentId = Number(props.match.params.id);
    const students = props.students;
    const student = students.find(student => student.id === studentId)
    const campus = props.campuses.find(campus => campus.id === student.campusId)
    return (
      <div className="card" >
        <div className="card-body">
            <h1 className="card-title" >{student.name}</h1>
            <h4 className="card-subtitle mb-2 text-muted">{student.email}</h4>
            <h4 className="card-subtitle mb-2 text-muted">{campus.name}</h4>
          <button type="button" className="btn btn-secondary col-sm-6">Edit</button>
          <button onClick={props.handleRemove} type="button" className="btn btn-danger col-sm-6">Remove Student</button>
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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleRemove: (e) => {
      const student = ownProps.match.params
      return dispatch(deleteStudent(student, ownProps.history));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent);

