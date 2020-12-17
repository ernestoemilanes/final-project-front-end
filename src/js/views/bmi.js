import React from "react";

export const Bmi = () => (
	<div className="container">
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
				<button id="bmiButton" className="btn btn-success">
					Click for BMI
				</button>
			</div>
			<div className="col-md-3">
				<h3 id="bmi-display">YOUR BMI IS: </h3>
			</div>
		</div>
	</div>
);
