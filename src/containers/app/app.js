import React, { Component } from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router } from "react-router-dom";

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
