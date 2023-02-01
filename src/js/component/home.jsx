import React from "react";
import { Counter } from "./Counter.jsx";


//create your first component
const Home = (horario) => {
console.log(horario)
	return (
		<>
		<div className="contReloj conatainer fluid text-center m-0 w-100 bg-black"> 
			<div className="reloj container text-center d-flex">
				<span className="clock col material-symbols-outlined">
					schedule
				</span>
				<div className="container m-0">
					<div className="row">
						<Counter digito={horario.hora[0]}/>
						<Counter digito={horario.hora[1]}/>
						<Counter digito={horario.hora[2]}/>
						<Counter digito={horario.hora[3]}/>
						<Counter digito={horario.hora[4]}/>
						<Counter digito={horario.hora[5]}/>
					</div>
				</div>
			</div>
		</div>
		</>
	);
};

export default Home;
