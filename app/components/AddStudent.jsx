import React, { Component } from 'react';
import { Link, Navlink } from 'react-router-dom';
import { connect } from 'react-redux';
import { postStudent } from '../store'

function AddStudent (props) {
  document.title = "Add student"
  return (
    <div className ="d-flex justify-content-center">
    <form onSubmit={props.onSubmit} className="col-md-6">
    <div className="form-group" >
      <label>Name</label>
      <input type="name" className="form-control" placeholder="enter student name..." name="name"/>
    </div>
    <div className="form-group">
      <label>email</label>
      <input type="email" className="form-control" placeholder="enter student email..." name="email" />
    </div>
    <div className="form-group">
      <label>Select Campus</label>
      <select className="form-control" name="campus">
        {props.campuses.map(campus => {
          let selected = props.campus.id === campus.id ? 'selected' : '';
          return (
            <option key={campus.id} value={campus.id} selected={selected}>{campus.name}</option>
          )
        })}
      </select>
    </div>
    <button type="submit" className="btn btn-primary">Add</button>
    </form>
  </div>
  )
}



const mapStateToProps = (state, ownProps) => {
  return {
    campuses: state.campuses,
    campus: state.campus
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (e) => {
      const student = {
        name: e.target.name.value,
        email: e.target.email.value,
        campusId: e.target.campus.value
      }
      e.preventDefault();
      return dispatch(postStudent(student, ownProps.history))
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(AddStudent);




