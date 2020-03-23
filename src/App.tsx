import "./App.css";

import NpmModule from "npm-module";
import React from "react";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NpmModule text="Christopher" />
      </header>
    </div>
  );
}

export default App;
