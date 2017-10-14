import React, { Component } from 'react';
import { Navlink } from 'react-router-dom';



export default class Navbar extends Component {

  render()  {
    return (
      <nav className="navbar">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Campuses</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Students</a>
          </li>
        </ul>
      </nav>
    )
  }
}
