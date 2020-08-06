import React, { Component } from "react";
import Sidebar from "./sidebar";
import axios from "axios";

class Masking extends Component {
  constructor() {
    super();
    this.state = {
      overview: true,
      demo: false,
      apidoc: false,
      deploy: false,
      sample: false,
      file: null,
      type: "front",
      fileName: "Choose file",
      result: {}
    };
  }

  showHideTab = (e, tab) => {
    e.preventDefault();
    this.setState({
      overview: false,
      demo: false,
      apidoc: false,
      deploy: false,
      sample: false
    });

    this.setState({ [tab]: true });
  };

  fileHandle = e => {
    //console.log(e.target.files[0]);
    this.setState({
      file: e.target.files[0],
      fileName: e.target.files[0].name
    });
  };

  handleChange = e => {
    let value = e.target.value;
    this.setState({ type: value });
  };

  submit = e => {
    e.preventDefault();
    let type = this.state.type;
    let side = type;

    const file = new FormData();
    file.append(side, this.state.file, this.state.file.name);
    //file.append("key", side);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };

    // axios
    //.post("http://13.71.122.11:5504/kycReader/masking/" + url + "/", file, config)
    //.then(resp => {
    //let data = resp.data;
    let data = {
      front: "RABIUL ISLAM",
      back: "4917 6442 8655"
    };

    this.setState({ result: data });
    //});
  };

  render() {
    return (
      <div>
        <div class="sidebar">
          <Sidebar />
        </div>
        <div class="content">
          <div className="content-box">
            <h3>Aadhaar Masking</h3>
            <div className="navbar-con">
              <a
                href="#"
                className={this.state.overview === true ? "active" : ""}
                onClick={e => this.showHideTab(e, "overview")}
              >
                Overview
              </a>
              <a
                href="#"
                className={this.state.demo === true ? "active" : ""}
                onClick={e => this.showHideTab(e, "demo")}
              >
                Demo {this.state.activeItem}
              </a>
              <a
                href="#"
                className={this.state.apidoc === true ? "active" : ""}
                onClick={e => this.showHideTab(e, "apidoc")}
              >
                API Doc
              </a>
              <a
                href="#"
                className={this.state.deploy === true ? "active" : ""}
                onClick={e => this.showHideTab(e, "deploy")}
              >
                Deployment
              </a>
              <a
                href="#"
                className={this.state.sample === true ? "active" : ""}
                onClick={e => this.showHideTab(e, "sample")}
              >
                Sample
              </a>
            </div>
            {this.state.overview === true && (
              <div>
                <p>
                  PDF with multiple file and single file masking with short and
                  long format. Service api to mask document and return it.
                </p>
              </div>
            )}
            {this.state.demo === true && (
              <div>
                <form onSubmit={e => this.submit(e)} className="uploadform">
                  <div class="place">
                    <label>Select File Type: </label>
                    <select
                      class="custom-select form-control"
                      id="type"
                      name="type"
                      onChange={this.handleChange}
                    >
                      <option value="front">Aadhaar Front</option>
                      <option value="back">Aadhaar Back</option>
                    </select>
                  </div>
                  <div class="place">
                    <div class="custom-file">
                      <input
                        type="file"
                        class="custom-file-input"
                        id="inputGroupFile01"
                        onChange={this.fileHandle}
                      />
                      <label class="custom-file-label" for="inputGroupFile01">
                        {this.state.fileName}
                      </label>
                    </div>
                  </div>

                  <div class="place">
                    <div class="custom-file">
                      <input type="submit" value="Submit" />
                    </div>
                  </div>
                </form>
                <div className="result">
                  <table className="mytable">
                    {Object.entries(this.state.result).map(([key, value]) => {
                      return (
                        <tr>
                          <td>{key}</td>
                          <td>{value.toString()}</td>
                        </tr>
                      );
                    })}
                  </table>
                </div>
              </div>
            )}
            {this.state.apidoc === true && (
              <div>
                <p>Api doc Will be available soon Api </p>
              </div>
            )}
            {this.state.deploy === true && (
              <div>
                <p>Deployment doc Will be available soon</p>
              </div>
            )}
            {this.state.sample === true && (
              <div>
                <p>sample will be available </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Masking;
