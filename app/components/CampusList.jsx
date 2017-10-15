import React, { Component } from 'react';
import { Navlink } from 'react-router-dom';

export default class CampusList extends Component {

  render() {
    return (
      <div className="container-fluid">
      <table id="campus-list" className="table" >
      <thead>
        <tr>
          <th>Campus Name</th>
          <th>Students</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
    </div>
    )
  }
}
