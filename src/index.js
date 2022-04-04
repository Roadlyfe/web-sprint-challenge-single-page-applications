import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
// import { worker } from '.api-mocks/browser'
// worker.start()

ReactDOM.render(
    <Router>
        <App />
    </Router>,
 document.getElementById("root")
 );
