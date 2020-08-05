import React, { Component } from 'react';
import { render } from 'react-dom';

class SideBar extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <div class="logo"></div>
        <div class="menu"></div> 
      </div>
    );
  }
}

export default SideBar