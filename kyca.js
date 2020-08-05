import React, { Component } from "react";
import axios from "axios";

class Kyc extends Component {
  constructor() {
    super();
    this.state = {
      overview: false,
      demo: true,
      apidoc: false,
      deploy: false,
      sample: false,
      file: null,
      type: "aadhaar-front",
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
    console.log(e.target.files[0]);
    this.setState({ file: e.target.files[0] });
  };

  handleChange = e => {
    let value = e.target.value;
    this.setState({ type: value });
  };

  submit = e => {
    e.preventDefault();
    let type = this.state.type;
    let url = type;
    let side = "front";

    if (type === "aadhaar-front") {
      let split = type.split("-");

      let url = split[0];
    } else if (type === "aadhaar-back") {
      let split = type.split("-");
      let side = "back";
      let url = split[0];
    } else {
      let url = type;
    }

    const file = new FormData();
    file.append(side, this.state.file, this.state.file.name);
    //file.append("key", side);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };

    // axios
    //.post("http://13.71.122.11:5504/onlineReader/" + url + "/", file, config)
    //.then(resp => {
    //let data = resp.data;
    let data = {
      name: "RABIUL ISLAM",
      aadhar_number: "4917 6442 8655",
      gender: "male",
      dob: "14/07/1985",
      address: "unknown",
      father_name: "ATAUR RAHAMAN",
      first_name: "RABIUL",
      last_name: "ISLAM"
    };
    this.setState({ result: data });
    //});
  };

  render() {
    return (
      <div>
        <h3>KYC (PAN + DL + RC + Aadhar)</h3>
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
              Data extraction from kyc documents like pan,aadhar, full size
              aadhar, dl, rc, etc - Pancard with new and old design - DL and Rc
              for multiple state with different design
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
                  <option value="aadhaar-front">Aadhaar Front</option>
                  <option value="aadhaar-back">Aadhaar Back</option>
                  <option value="pan">Pan</option>
                  <option value="voter">Voter ID</option>
                  <option value="full_adhar">Full aadhaar</option>
                  <option value="dl">Driving Licence</option>
                  <option value="rc">RC</option>
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
                    Choose file{" "}
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
              {Object.entries(this.state.result).map(([key, value]) => {
                return (
                  <div>
                    {key} : {value.toString()}
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {this.state.apidoc === true && (
          <div>
            <p>Api </p>
          </div>
        )}
        {this.state.deploy === true && (
          <div>
            <p>deploy</p>
          </div>
        )}
        {this.state.sample === true && (
          <div>
            <p>sample</p>
          </div>
        )}
      </div>
    );
  }
}

export default Kyc;
