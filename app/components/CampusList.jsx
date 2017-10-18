import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
import { connect } from 'react-redux';


function CampusList (props) {

    return (
      <div className="container-fluid">
      <table id="campus-list" className="table table-striped" >
      <thead>
        <tr>
          <th>Campus Name</th>
          <th>Number Of Students</th>
        </tr>
      </thead>
      <tbody>
        {props.campuses.map(campus => {
          return (
          <tr key={campus.id}>
            <td scope="row">{campus.name}</td>
            <td>{props.students.filter(student => student.campusId === campus.id).length}</td>
          </tr>)
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

export default withRouter(connect(mapStateToProps)(CampusList))


