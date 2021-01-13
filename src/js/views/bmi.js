import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Navigation } from "../component/navigation";

export const Bmi = () => {
	const { store, actions } = useContext(Context);
	const [weight, setWeight] = useState();
	// const [height, setHeight] = useState();
	const [feet, setFeet] = useState();
	const [inches, setInches] = useState();
	const [isMetric, setIsMetric] = useState(false);
	const [cm, setCm] = useState();
	return (
		<div className="container" style={{ backgroundSize: "100%" }}>
			<div>
				<Navigation />
			</div>
			<h1 className="text-center text-dark pt-3">BMI Calculator</h1>
			<div className="text-center mt-5">
				<input
					type="radio"
					id="imperial"
					name="imperial"
					value="imperial"
					checked={!isMetric}
					onChange={e => setIsMetric(false)}
				/>
				<label className="pr-3">Imperial</label>
				<input
					type="radio"
					id="metric"
					name="metric"
					value="metric"
					checked={isMetric}
					onChange={e => setIsMetric(true)}
				/>
				<label>Metric</label>
			</div>
			<div id="block" className="row justify-content-center text-dark text-center pt-3">
				<div className="col-md-3">
					<h4 className="text-dark">Weight: {store.convert_weight}</h4>
					<input id="weight" type="text" placeholder="lbs" onChange={e => setWeight(e.target.value)} />
					{/* <button
						id="convertButton"
						className="btn btn-warning btn-sm"
						onClick={() => actions.bmiConvertWeight(weight)}>
						Click to Convert Lbs to Kg
					</button> */}
				</div>
				<div className="col-md-3">
					<h4 className="text-dark">Height: </h4>
					{isMetric ? (
						<input id="heightInCm" type="text" placeholder="cm" onChange={e => setCm(e.target.value)} />
					) : (
						<>
							<input
								id="heightInFeet"
								type="text"
								placeholder="feet"
								onChange={e => setFeet(e.target.value)}
							/>
							<input
								id="heightInInches"
								type="text"
								placeholder="inches"
								onChange={e => setInches(e.target.value)}
							/>
						</>
					)}
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
					className="btn btn-success"
					onClick={() => {
						let [ft, inch] = [feet, inches];
						if (isMetric) {
							[ft, inch] = actions.cmToFeet(cm);
						}
						actions.bmiResult(weight, ft, inch);
					}}>
					Click for BMI
				</button>
			</div>
			<div className="text-center pt-5">
				<h1 className="text-dark" id="bmi-display">
					{store.bmi}
				</h1>
			</div>
		</div>
	);
};
