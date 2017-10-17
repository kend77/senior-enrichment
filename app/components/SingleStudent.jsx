import React, { Component } from 'react';
import { Navlink } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteStudent, setStudent, setCampus } from '../store'


class SingleStudent extends Component {

    constructor(props) {
      super(props)
    }

    componentDidMount() {
      const studentId = Number(this.props.match.params.id);
      const students = this.props.students;
      const student = students.find(student => student.id === studentId)
      const campus = this.props.campuses.find(campus => campus.id === student.campusId)
      this.props.handleSetStudent(student)
      this.props.handleSetCampus(campus)
    }


    render() {

    return (
      <div className="card" >
        <div className="card-body">
            <h1 className="card-title" >{this.props.student.name}</h1>
            <h4 className="card-subtitle mb-2 text-muted">{this.props.student.email}</h4>
            <h4 className="card-subtitle mb-2 text-muted">{this.props.campus.name}</h4>
          <button type="button" className="btn btn-secondary col-sm-6">Edit</button>
          <button onClick={this.props.handleRemove} type="button" className="btn btn-danger col-sm-6">Remove Student</button>
        </div>
      </div>
    )
  }
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

