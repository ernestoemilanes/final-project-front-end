import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Navigation } from "../component/navigation";

export const Bmi = () => {
	const { store, actions } = useContext(Context);
	const [weight, setWeight] = useState();
	const [height, setHeight] = useState();
	const [inches, setInches] = useState();
	return (
		<div className="container" style={{ backgroundSize: "100%" }}>
			<div>
				<Navigation />
			</div>
			<h1 className="text-center pt-3">BMI Calculator</h1>
			<div id="block" className="row justify-content-center text-center pt-3">
				<div className="col-md-3">
					<h4>Weight in (kg): {store.convert_weight} </h4>
					<input id="weight" type="text" placeholder="lbs" onChange={e => setWeight(e.target.value)} />
					<button
						id="convertButton"
						className="btn btn-danger"
						onClick={() => actions.bmiConvertWeight(weight)}>
						Click to Convert Lbs to Kg
					</button>
				</div>
				<div className="col-md-3">
					<h4>Height in (cm): {store.convert_height}</h4>
					<input id="height" type="text" placeholder="inches" onChange={e => setHeight(e.target.value)} />
					<button
						id="convertButton"
						className="btn btn-success"
						onClick={() => actions.bmiConvertHeight(height)}>
						Click to Convert CM to Inches
					</button>
				</div>
			</div>
			<div className="row justify-content-center text-center pt-4">
				<div className="col-md-3">
					<button id="bmiButton" className="btn btn-light" onClick={() => actions.bmiResult(weight, height)}>
						Click for BMI
					</button>
				</div>
				<div className="col-md-3">
					<h3 id="bmi-display">YOUR BMI IS: {store.bmi}</h3>
				</div>
			</div>
		</div>
	);
};
