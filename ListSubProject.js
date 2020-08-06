import React, { Component } from "react";
import Sidebar from "./sidebar";
import ProjectList from "./projectList";

//import Logo from '';

class ListSubProject extends Component {
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

        <ProjectList />
      </div>
    );
  }
}

export default ListSubProject;
