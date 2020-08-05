import React, { Component } from "react";
import Kyc from "./kyca";
//import Logo from '';

class Content extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <div className="content-box">
          <Kyc />
        </div>
      </div>
    );
  }
}

export default Content;
