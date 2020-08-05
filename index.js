import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";
import "./style.css";
import "./bootstrap.min.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <Router>
        <Switch>
          {routes.map(route => (
            <Route path={route.path} {...route} />
          ))}
        </Switch>
      </Router>
    );
  }
}

render(<App />, document.getElementById("root"));
