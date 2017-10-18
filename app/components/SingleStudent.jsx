import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteStudent, setStudent, setCampus } from '../store'


class SingleStudent extends Component {

    constructor(props) {
      super(props)
    }

    render() {

      const studentId = Number(this.props.match.params.id);

      if(this.props.students.length && this.props.campuses.length) {
        const student = this.props.students.find(student => student.id === studentId);
        const campus = this.props.campuses.find(campus => campus.id ===student.campusId);
        this.props.handleSetCampus(campus)
        this.props.handleSetStudent(student)
      }
      return (
        <div className="card" >
          <div className="card-body">
              <h1 className="card-title" >{this.props.student.name}</h1>
              <h4 className="card-subtitle mb-2 text-muted">{this.props.student.email}</h4>
              <h4 className="card-subtitle mb-2 text-muted">{this.props.campus.name}</h4>
            <Link to={`/students/${this.props.student.id}/edit`}>
            <button type="button" className="btn btn-secondary col-sm-6">Edit</button>
            </Link>
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

