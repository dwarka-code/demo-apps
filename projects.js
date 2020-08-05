import React, { Component } from "react";

//import Logo from '';

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div class="content">
        <h2>Choose Project</h2>
        <div className="content-box" />
      </div>
    );
  }
}

export default Projects;
