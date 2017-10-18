import React, { Component } from 'react';
import { connect } from 'react-redux';


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
      console.log(this.props.campus.name)
      this.setState({
        formId: this.props.student.id,
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

      return (
        <div className ="d-flex justify-content-center">
        <form className="col-md-6">
        <div className="form-group" >
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

export default connect(mapStateToProps)(EditStudent);
