import React from "react";
import { Link } from "react-router-dom";

import { Navigation } from "../component/navigation";

export const Bmi = () => (
	<div className="container" style={{ backgroundSize: "100%" }}>
		<div>
			<Navigation />
		</div>
		{/* <div className="navbar navbar-light bg-light mb-3">
			<div className="d-flex justify-content-end ml-auto">
				<Link to="/">
					<button className="boton-back-statistics btn btn-primary ">Back</button>
				</Link>
				<Link to="/login">
					<button className="boton-home-statistics btn btn-primary ml-2 ">Sign out</button>
				</Link>
			</div>
		</div> */}
		<h1 className="text-center pt-3">BMI Calculator</h1>
		<div id="block" className="row justify-content-center text-center pt-3">
			<div className="col-md-3">
				<h4>Weight (lbs) </h4>
				<input id="weight" type="text" />
			</div>
			<div className="col-md-3">
				<h4>Height (inches) </h4>
				<input id="height" type="text" />
			</div>
		</div>
		<div className="row justify-content-center text-center pt-4">
			<div className="col-md-3">
				<button id="bmiButton" className="btn btn-light">
					Click for BMI
				</button>
			</div>
			<div className="col-md-3">
				<h3 id="bmi-display">YOUR BMI IS: </h3>
			</div>
		</div>
	</div>
);
