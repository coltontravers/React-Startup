import React, { Component } from "react";
import PropTypes from "prop-types";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router } from "react-router-dom";

const test = "hi!";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>This is the app base!</h1>
        </div>
      </Router>
    );
  }
}

export default hot(App);
