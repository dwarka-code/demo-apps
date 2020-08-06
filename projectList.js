import React, { Component } from "react";

//import Logo from '';

class ProjectList extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    let Kyc =
      "Data extraction from kyc documents like pan, aadhaar, full size aadhaar, dl, rc, etc.";
    let aadhar =
      "PDF with multiple file and single file masking with short and long format";
    return (
      <div className="content">
        <h2 className="text-center">OCR</h2>

        <div className="row content-info mx-1 mx-md-2 mx-lg-5">
          <div className="col-12">
            <div className="row match-height">
              <div className="col-md-4 click col-sm-6 kb-search-content">
                <div className="card">
                  <div className="card-content">
                    <div className="card-body text-center">
                      <h4>KYC Data</h4>
                      <p className="text-center">{Kyc.substring(0, 100)}</p>
                      <div className="text-center">
                        <a href="kyc" className="btn-cus">
                          View
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 click col-sm-6 kb-search-content">
                <div className="card">
                  <div className="card-content">
                    <div className="card-body text-center">
                      <h4>Aadhaar Masking</h4>
                      <p className="text-center">{aadhar.substring(0, 100)}</p>
                      <div className="text-center">
                        <a href="masking" className="btn-cus">
                          View
                        </a>
                      </div>
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

export default ProjectList;
