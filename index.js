import React, { Component } from 'react';
import { render } from 'react-dom';
import SideBar from './sidebar';
import './style.css';
import './bootstrap.min.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <div class="sidebar"><SideBar /></div>
        <div class="content"></div> 
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
