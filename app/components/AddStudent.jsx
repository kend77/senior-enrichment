import React, { Component } from 'react';
import { Link, Navlink } from 'react-router-dom';
import { connect } from 'react-redux';

function AddStudent (props) {

  return (
    <form>
    <div className="form-group">
      <label>Name</label>
      <input type="name" className="form-control" placeholder="student name" />
    </div>
    <div className="form-group">
      <label>email</label>
      <input type="email" className="form-control" placeholder="student email" />
    </div>
    <div className="form-group">
      <label>Select Campus</label>
      <select className="form-control">
        {props.campuses.map(campus => {
          return (
            <option key={campus.id} value={campus.id}>{campus.name}</option>
          )
        })}
      </select>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  )
}



const mapStateToProps = (state, ownProps) => {
  return {
    campuses: state.campuses
  }
}



export default connect(mapStateToProps)(AddStudent);
