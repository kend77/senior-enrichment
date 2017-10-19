import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCampus, editCampus } from '../store'


class EditCampus extends Component {

    constructor(props) {
      super(props)
      this.state = {
        formCampus: ''
      }
      this.handleNameChange = this.handleNameChange.bind(this);
    }

    componentDidMount() {
      this.setState({formCampus: this.props.campus.name})
    }

    handleNameChange (e) {
      this.setState({formCampus : e.target.value})
    }


    render() {
      document.title = "Edit Campus"
      return (
        <div className ="d-flex justify-content-center">
        <form onSubmit={this.props.handleSubmit} className="col-md-6">
        <div className="form-group" >
        <h2>Editing campus...</h2>
        <br />
          <label>Campus Name</label>
          <input onChange={(e) => this.handleNameChange(e)} value={this.state.formCampus} type="name" className="form-control" placeholder="campus name" name="name"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit Changes</button>
      </form>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    campus: state.campus
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: (e) => {
      e.preventDefault();
      const campus = {
        id: Number(ownProps.match.params.id),
        name: e.target.name.value
      }
      // const action = setCampus(campus)
      // dispatch(action)
      return dispatch(editCampus(campus, ownProps.history))
    }
  }
}

 export default connect(mapStateToProps, mapDispatchToProps)(EditCampus);
