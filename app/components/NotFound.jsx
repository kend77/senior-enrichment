import React, {Component} from 'react';
import { Redirect, Link } from 'react-router-dom';

class NotFound extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({redirect: true})
    }, 5000)
  }

  render() {
  return (
    <div className="font-weight-bold alert alert-warning">
      <h3>404 page not found</h3>
      <p>We are sorry but the page you are looking for does not exist.</p>
      <br />
      <p> Redirecting......OR</p>
      <Link to="/">Click Here to Go straight to Home</Link>
      {this.state.redirect ?
      <Redirect to="/" /> :
      ''}
    </div>
    )
  }
}

export default NotFound;
