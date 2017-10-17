import React, { Component } from 'react';


export default class Welcome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: true,
      interval: ''
    }
  }

  homeInterval () {
    setInterval(() => {
      this.setState({display: !this.state.display})
    }, 3000)
  }


  componentDidMount() {
    this.homeInterval()
  }

  componentWillUnmount() {
    console.log(interval)
  }

  render() {
    return (
      <div id="home">
      {this.state.display ?
      <h1 id="welcome">Welcome to MH Interplanetary Academy of JS</h1>:
      <h1 id="welcome">Welcome to Margaret Hamilton Interplanetary Academy of JavaScript</h1>
      }
      </div>
    )
  }
}
