import React, { Component } from "react";
import NavBar from "./NavBar";
import Questions from "./Questions";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Questions />
      </div>
    );
  }
}

export default App;
