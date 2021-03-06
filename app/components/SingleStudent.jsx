import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteStudent, setStudent, setCampus } from '../store'


function SingleStudent (props) {

  document.title = "Students"

  const studentId = Number(props.match.params.id);


  if(props.students.length && props.campuses.length) {

    const student = props.students.find(student => student.id === studentId);
    const campus = props.campuses.find(campus => campus.id === student.campusId);
    props.handleSetCampus(campus)
    props.handleSetStudent(student)

  }

  return (
    <div className ="d-flex justify-content-center">
      <div className="card col-md-6" >
        <div className="card-body">
            <h1 className="card-title" >{props.student.name}</h1>
            <h4 className="card-subtitle mb-2 text-muted">{props.student.email}</h4>
            <Link to={`/campuses/${props.campus.id}`}>
            <h4 className="card-subtitle mb-2 card-link">{props.campus.name}</h4>
            </Link>
            {props.student.image ?
              <img src={props.student.image} className="rounded mx-auto d-block" width="250" height="250"/> :
              '' }
          <Link to={`/students/${props.student.id}/edit`}>
          <button type="button" className="btn btn-secondary col-sm-6">Edit</button>
          </Link>
          <button onClick={props.handleRemove} type="button" className="btn btn-danger col-sm-6">Remove Student</button>
        </div>
      </div>
    </div>
    )
  }





const mapStateToProps = (state, ownProps) => {
  return {
    students: state.students,
    campuses: state.campuses,
    student: state.student,
    campus: state.campus
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleRemove: (e) => {
      const student = ownProps.match.params
      return dispatch(deleteStudent(student, ownProps.history));
    },
    handleSetStudent: (student) => {
      dispatch(setStudent(student));
    },
    handleSetCampus: (campus) => {
      dispatch(setCampus(campus));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent);

