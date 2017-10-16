import React, { Component } from 'react';


export default class Search extends Component {
  render() {
    return (
      <div id="search">
      <form className="form-inline">
        <input className="form-control mr-sm-2" type="text" placeholder="search..." aria-label="Search"></input>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
      </div>
    )
  }
}
