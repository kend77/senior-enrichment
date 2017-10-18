import React, { Component } from 'react';
import { Link, Navlink } from 'react-router-dom';
import { connect } from 'react-redux';
import { postCampus } from '../store'


function AddCampus (props) {
  document.title = "Add Campus"
  return (
    <div className ="d-flex justify-content-center">
    <form onSubmit={props.onSubmit} className="col-md-6">
    <div className="form-group" >
    <h2>Add Campus</h2>
    <br />
      <label>Campus Name</label>
      <input type="name" className="form-control" placeholder="enter campus name..." name="name"/>
    </div>
    <button  type="submit" className="btn btn-primary">Submit</button>
  </form>
  </div>
  )
}


const mapStateToProps = (state, ownProps) => {
  return {
    campuses: state.campuses
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (e) => {
      console.log(e.target.name.value)
      const campus = {
        name: e.target.name.value
      }
      e.preventDefault();
      return dispatch(postCampus(campus, ownProps.history))
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(AddCampus);
