import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Navigation } from "../component/navigation";

export const Bmi = () => {
	const { store, actions } = useContext(Context);
	const [weight, setWeight] = useState();
	// const [height, setHeight] = useState();
	const [feet, setFeet] = useState();
	const [inches, setInches] = useState();
	return (
		<div className="container" style={{ backgroundSize: "100%" }}>
			<div>
				<Navigation />
			</div>
			<h1 className="text-center text-light pt-3">BMI Calculator</h1>
			<div id="block" className="row justify-content-center text-warning text-center pt-3">
				<div className="col-md-3">
					<h4 className="text-warning">Weight: {store.convert_weight}</h4>
					<input id="weight" type="text" placeholder="lbs" onChange={e => setWeight(e.target.value)} />
					{/* <button
						id="convertButton"
						className="btn btn-warning btn-sm"
						onClick={() => actions.bmiConvertWeight(weight)}>
						Click to Convert Lbs to Kg
					</button> */}
				</div>
				<div className="col-md-3">
					<h4 className="text-warning">Height: {store.convert_height}</h4>
					<input id="heightInFeet" type="text" placeholder="feet" onChange={e => setFeet(e.target.value)} />
					<input
						id="heightInInches"
						type="text"
						placeholder="inches"
						onChange={e => setInches(e.target.value)}
					/>
					{/* <button
						id="convertButton"
						className="btn btn-warning btn-sm"
						onClick={() => actions.bmiConvertHeight(height)}>
						Click to Convert CM to In
					</button> */}
				</div>
			</div>
			<div className="text-center pt-5">
				<button
					id="bmiButton"
					className="btn btn-warning"
					onClick={() => actions.bmiResult(weight, feet, inches)}>
					Click for BMI
				</button>
			</div>
			<div className="text-center pt-5">
				<h1 className="text-warning" id="bmi-display">
					{store.bmi}
				</h1>
			</div>
		</div>
	);
};
