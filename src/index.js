import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App hasUpdate={false} />, document.getElementById("root"));

let ogSrc;

setInterval(() => {
  fetch("/asset-manifest.json").then(response => {
    response.json().then(function(data) {
      const src = data.files["main.js"];
      if (ogSrc == null) {
        ogSrc = src;
      } else if (ogSrc !== src) {
        ReactDOM.render(
          <App hasUpdate={true} />,
          document.getElementById("root")
        );
      }
    });
  });
}, 5000);

serviceWorker.unregister();
