import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCampus } from '../store'




function SingleCampus(props) {

  document.title = `${props.campus.name}-Campus`

  if(props.campuses.length) {
    const campus = props.campuses.find(campus => campus.id === Number(props.match.params.id));
    props.handleSetCampus(campus)
  }
  return (
    <div className ="d-flex justify-content-center">
    <div className="card col-md-10">
      <div className="card-body">
        <h1 className="card-title font-italic">{props.campus.name}</h1>
        <div>
        <Link to={`/campuses/${props.campus.id}/edit`}>
          <button type="button" className="btn btn-secondary col-sm-6">Edit Campus Name</button>
        </Link>
        <button type="button" className="btn btn-danger col-sm-6">Delete Campus</button>
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
    handleSetStudent: (student) => {
      dispatch(setStudent(student));
    },
    handleSetCampus: (campus) => {
      dispatch(setCampus(campus));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus);


