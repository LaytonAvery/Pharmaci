import Button from "react-bootstrap/Button";
import React, { Component } from "react";
import Image from "./Components/Image";
import { BrowserRouter as Router } from "react-router-dom";
import DisplayName from "./Components/DisplayName";
import Words from "./Components/Words";
import "bootstrap/dist/css/bootstrap.min.css";
import MyDisclosure from "./Components/Disclosure";

class App extends Component {
  render() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-700 flex flex-col items-center justify-center">
        <Router>
          <div>
            <Image />
            <h1>
              Welcome to Your Neighborhood Pharmaci!{" "}
              <i
                class="em em-pill"
                aria-role="presentation"
                aria-label="PILL"
              ></i>
            </h1>
            <Words />
            <DisplayName />
            <MyDisclosure />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
