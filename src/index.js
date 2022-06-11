import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//StateProvider is the context API
import { StateProvider } from "./StateProvider";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
