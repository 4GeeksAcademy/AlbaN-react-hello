import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/index.css";
import Home from "./component/Home.js";

//render your react application
ReactDOM.createRoot(document.getElementById('app')).render(<Home />);
