import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCampus, deleteCampus, removeStudents } from '../store'




function SingleCampus (props) {


    document.title = `${props.campus.name}-Campus`

    return (
      <div className ="d-flex justify-content-center">
      <div className="card col-md-10">
        <div className="card-body">
          <h1 className="card-title font-italic text-center">{props.campus.name}</h1>
          {props.campus.image ?
          <img src={props.campus.image} className="rounded mx-auto d-block" width="500" height="500"/> :
          '' }
          <div>
          <Link to={`/campuses/${props.campus.id}/edit`}>
            <button type="button" className="btn btn-secondary btn-lg col-sm-6">Edit Campus Name</button>
          </Link>
          <button onClick={(e) => props.handleDeleteCampus(e, props.students)} type="button" className="btn btn-danger btn-lg col-sm-6">Delete Campus</button>
          <Link to="/students/addstudent">
            <button type="button" className="btn btn-primary btn-md btn-block">Add New Student</button>
          </Link>
          </div>
          <br />
          <br />
          <ul className="list-group list-group-flush">
          <h4>Students</h4>
            {props.students.filter(student => student.campusId === props.campus.id).map(student => {
              return (
                <li key={student.id} className="list-group-item">
                <Link to={`/students/${student.id}`}>{student.name}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      </div>
    )
}


const mapStateToProps = (state, ownProps) => {
  return {
    students: state.students,
    campus: state.campus,
    campuses: state.campuses
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSetCampus: (campus) => {
      dispatch(setCampus(campus));
    },
    handleDeleteCampus : (e, students) => {
      const campus = ownProps.match.params
      const deleteStudents = students.filter(student => student.campusId === Number(campus.id))
      const action = removeStudents(deleteStudents)
      dispatch(action);
      return dispatch(deleteCampus(campus, ownProps.history))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus);


