import React from "react";
import { Counter } from "./Counter.jsx";





//create your first component
const Home = (props) => {
	return (
		<>
		<div className="contReloj conatainer fluid text-center m-0 w-100 bg-black"> 
			<div className="reloj container text-center d-flex">
				<span className="clock col material-symbols-outlined">
					schedule
				</span>
				<div className="container m-0">
					<div className="row">
						<Counter className=""/>
						<Counter className="hourOne"/>
						<Counter className="minTwo"/>
						<Counter className="minOne"/>
						<Counter className="secTwo"/>
						<Counter className="horaReloj"/>
					</div>
				</div>
			</div>
		</div>
		</>
	);
};

export default Home;
