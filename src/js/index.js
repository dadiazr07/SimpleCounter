//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application




var seconds = 0
var timer = setInterval(upTimer, 1000);
function upTimer() {
    ++seconds;
    
    let horas = (Math.floor(seconds / 3600) < 10) ? `0${Math.floor(seconds / 3600)}` : `${Math.floor(seconds / 3600)}`;
    let minutos = (Math.floor((seconds - horas * 3600) / 60)<10) ? `0${Math.floor((seconds - horas * 3600) / 60)}` : `${Math.floor((seconds - horas * 3600) / 60)}`
    let segundos = ((seconds - (horas * 3600 + minutos * 60)) < 10) ? `0${seconds - (horas * 3600 + minutos * 60)}` : `${seconds - (horas * 3600 + minutos * 60)}`

    let horaReloj = `${horas}${minutos}${segundos}`
    

    // console.log(horaReloj)

    
    
    return ReactDOM.render(
        <Home hora={horaReloj.split("")}/>,document.querySelector("#app")
    );
}
