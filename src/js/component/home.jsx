import React from "react";
import { Counter } from "./Counter.jsx";


//create your first component
const Home = (horario) => {
console.log(horario)
	return (
		<>
		
			<div className="reloj">
				<span className="clock material-symbols-outlined">
					schedule
				</span>
				<div className="">
					<div className="digitos">
						<Counter digito={horario.hora[0]}/>
						<Counter digito={horario.hora[1]}/>
						<Counter digito={horario.hora[2]}/>
						<Counter digito={horario.hora[3]}/>
						<Counter digito={horario.hora[4]}/>
						<Counter digito={horario.hora[5]}/>
					</div>
				</div>
			</div>
		
		</>
	);
};

export default Home;
