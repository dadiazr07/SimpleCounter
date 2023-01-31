import React from "react";
import { Counter } from "./Counter.jsx";



//create your first component
const Home = () => {
	return (
		<>
		<div className="conatainer fluid text-center m-0 w-100"> 
		<div className="reloj container text-center d-flex">
			<span className="clock col">
				Clock
			</span>
			<div className="container m-0">
				<div className="row">
							<Counter/>
							<Counter/>
							<Counter/>
							<Counter/>
							<Counter/>
							<Counter/>
				</div>
			</div>
		</div>
		<h3 id= "countup">00:00:00</h3>
		<button id="stoptimer" onclick="clearInterval(timer)">Stop Timer</button>
		</div>
		</>
	);
};

export default Home;
