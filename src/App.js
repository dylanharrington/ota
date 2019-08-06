import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App({ hasUpdate }) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>v1</h1>
      </header>

      {hasUpdate && (
        <div
          className="Banner"
          onClick={() => {
            window.location.reload(true);
          }}
        >
          <p>New update available</p>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      )}
    </div>
  );
}

export default App;
