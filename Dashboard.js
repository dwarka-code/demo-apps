import React, { Component } from "react";
import Sidebar from "./sidebar";
import Projects from "./projects";

//import Logo from '';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <div class="sidebar">
          <Sidebar />
        </div>

        <Projects />
      </div>
    );
  }
}

export default Dashboard;
