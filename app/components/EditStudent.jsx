import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editStudent } from '../store'


class EditStudent extends Component {

    constructor(props) {
      super(props)
      this.state = {
        formName: '',
        formEmail: '',
        formCampus: ''
      }
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleEmailChange = this.handleEmailChange.bind(this);
    }

    componentDidMount() {
      this.setState({
        formName: this.props.student.name,
        formEmail: this.props.student.email,
        formCampusId: this.props.campus.id,
        formCampus: this.props.campus.name
      })
    }

    handleNameChange (e) {
      this.setState({formName : e.target.value})
    }

    handleEmailChange(e) {
      this.setState({formEmail: e.target.value});
    }

    render() {
      document.title = "Edit Student"
      return (
        <div className ="d-flex justify-content-center">
        <form onSubmit={this.props.handleSubmit} className="col-md-6">
        <div className="form-group" >
        <h2>Editing student {this.props.student.name}...</h2>
        <br />
          <label>Name</label>
          <input onChange={(e) => this.handleNameChange(e)} value={this.state.formName} type="name" className="form-control" placeholder="student name" name="name"/>
        </div>
        <div className="form-group">
          <label>email</label>
          <input onChange={(e) => this.handleEmailChange(e)} value={this.state.formEmail} type="email" className="form-control" placeholder="student email" name="email" />
        </div>
        <div className="form-group">
          <label>Select Campus</label>
          <select className="form-control" name="campus">
          <option key={this.state.formCampusId} value={this.state.formCampusId} defaultValue>{this.state.formCampus}</option>
          {this.props.campuses.filter(campus => campus.id !== this.state.formCampusId).map(campus => {
            return(
              <option key={campus.id} value={campus.id}>{campus.name}</option>
            )
          })}
          <option value={null}>---</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    campuses: state.campuses,
    student: state.student,
    campus: state.campus
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: (e) => {
      e.preventDefault();
      const student = {
        id: Number(ownProps.match.params.id),
        name: e.target.name.value,
        email: e.target.email.value,
        campusId: Number(e.target.campus.value)
      }
      return dispatch(editStudent(student, ownProps.history))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditStudent);
