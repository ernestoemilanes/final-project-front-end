import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Navigation } from "../component/navigation";

export const Bmr = () => {
	const { store, actions } = useContext(Context);
	const [weight, setWeight] = useState();
	const [height, setHeight] = useState();
	const [age, setAge] = useState();
	const [gender, setGender] = useState();
	return (
		<div className="container" style={{ backgroundSize: "100%" }}>
			<div>
				<Navigation />
			</div>
			<h1 className="text-center text-light pt-3">BMR Calculator</h1>
			<div id="block" className="row justify-content-center text-center pt-3">
				<div className="col-md-3 text-danger">
					<h4>Weight</h4>
					<input id="weight" type="text" placeholder="lbs" onChange={e => setWeight(e.target.value)} />
				</div>
				<div className="col-md-3 text-danger">
					<h4>Height</h4>
					<input id="height" type="text" placeholder="inches" onChange={e => setHeight(e.target.value)} />
				</div>
				<div className="col-md-3 text-danger">
					<h4>Age</h4>
					<input id="age" type="text" onChange={e => setAge(e.target.value)} />
				</div>
				<div className="col-md-3 text-danger">
					<form>
						<input
							type="radio"
							id="male"
							name="gender"
							value="male"
							onChange={e => setGender(e.target.value)}
						/>
						<label>Male</label>
						<input
							type="radio"
							id="female"
							name="gender"
							value="female"
							onChange={e => setGender(e.target.value)}
						/>
						<label>Female</label>
					</form>
				</div>
			</div>
			<div className="text-center pt-5">
				<button
					id="bmrButton"
					className="btn btn-danger"
					onClick={() => actions.bmrResult(weight, height, age, gender)}>
					Click for BMR
				</button>
			</div>
			<div className="text-center text-light pt-5">
				<h1>{store.bmr}</h1>
			</div>
		</div>
	);
};
// <h3 id="bmi-display">YOUR BMR IS: </h3>;
/*
    ! 66 + (6.2 x weight) + (12.7 x height) – (6.76 x age) = BMR for males
    * 655.1 + (4.35 x weight) + (4.7 x height) – (4.7 x age) = BMR for females
*/
