import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css"
import App from "./App";
import * as serviceWorker from "./serviceWorker";
ReactDOM.render(<App />, document.getElementById("root"));


serviceWorker.unregister();
