//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import { Counter } from "./component/Counter.jsx";

//render your react application




var seconds = 0
var timer = setInterval(upTimer, 1000);
function upTimer() {
    ++seconds;
    var hour = Math.floor(seconds / 3600);
    var minute = Math.floor((seconds - hour * 3600) / 60);
    var updSecond = seconds - (hour * 3600 + minute * 60);
    
    return ReactDOM.render(<Counter seconds={seconds}/>, document.querySelector("#app"));
}
