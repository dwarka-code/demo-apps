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
      <div className="content">
        <h2 className="text-center">Knowledge Base</h2>
        <p className="text-center">
          All below mention project related demo, api document, deployment
          process, and sample are available here
        </p>
        <div className="row content-info mx-1 mx-md-2 mx-lg-5">
          <div className="col-12">
            <div className="row match-height">
              <div className="col-md-4 click col-sm-6 kb-search-content">
                <a href="project">
                  <div className="card">
                    <div className="card-content">
                      <div className="card-body text-center">
                        <p>Project</p>
                        <div className="circle-num">2</div>
                        <h3>OCR</h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-4 click col-sm-6 kb-search-content">
                <div className="card">
                  <div className="card-content">
                    <div className="card-body text-center">
                      <p>Project</p>
                      <div className="circle-num">0</div>
                      <h3>Renewal</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 click col-sm-6 kb-search-content">
                <div className="card">
                  <div className="card-content">
                    <div className="card-body text-center">
                      <p>Project</p>
                      <div className="circle-num">0</div>
                      <h3>E-sign</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
