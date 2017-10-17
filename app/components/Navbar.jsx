import React, { Component } from 'react';
import {NavLink, Link } from 'react-router-dom';
import Search from './Search'



export default class Navbar extends Component {

  render()  {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand font-italic">MH</Link>
        <ul className="nav nav-pills mr-auto">
          <li className="nav-item">
            <NavLink to="/campuses" className="nav-link" >Campuses</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/students" className="nav-link">Students</NavLink>
          </li>
        </ul>
      <Search />
      </nav>
    )
  }
}

