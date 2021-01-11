import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Navigation } from "../component/navigation";

export const Bmr = () => {
	const { store, actions } = useContext(Context);
	const [weight, setWeight] = useState();
	const [feet, setFeet] = useState();
	const [inches, setInches] = useState();
	const [age, setAge] = useState();
	const [gender, setGender] = useState();
	const [activity, setActivity] = useState();
	return (
		<div className="container" style={{ backgroundSize: "100%" }}>
			<div>
				<Navigation />
			</div>
			<h1 className="text-center text-light pt-3">BMR Calculator</h1>
			<div id="block" className="row justify-content-center text-center pt-3">
				<div className="col-md-3 text-warning">
					<h4>Weight</h4>
					<input id="weight" type="text" placeholder="lbs" onChange={e => setWeight(e.target.value)} />
				</div>
				<div className="col-md-3 text-warning">
					<h4>Height</h4>
					<input id="heightInFeet" type="text" placeholder="feet" onChange={e => setFeet(e.target.value)} />
					<input
						id="heightInInches"
						type="text"
						placeholder="inches"
						onChange={e => setInches(e.target.value)}
					/>
				</div>
				<div className="col-md-3 text-warning">
					<h4>Age</h4>
					<input id="age" type="text" onChange={e => setAge(e.target.value)} />
				</div>
				<div className="col-md-3 text-warning">
					<form>
						<input
							type="radio"
							id="male"
							name="gender"
							value="male"
							onChange={e => setGender(e.target.value)}
						/>
						<label className="pr-3">Male</label>
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
			<div className="text-center text-warning pt-5">
				<form>
					<input
						type="radio"
						id="sedetary"
						name="activity"
						value="1.2"
						onChange={e => setActivity(e.target.value)}
					/>
					<label className="pr-3">Sedentary (little to no exercise)</label>
					<input
						type="radio"
						id="lightly_active"
						name="activity"
						value="1.375"
						onChange={e => setActivity(e.target.value)}
					/>
					<label className="pr-3">Lightly Active (light exercise 1–3 days per week)</label>
					<input
						type="radio"
						id="moderately_active"
						name="activity"
						value="1.55"
						onChange={e => setActivity(e.target.value)}
					/>
					<label className="pr-3">Moderately Active (moderate exercise 3–5 days per week)</label>
					<input
						type="radio"
						id="very_active"
						name="activity"
						value="1.725"
						onChange={e => setActivity(e.target.value)}
					/>
					<label className="pr-3">Very Active (hard exercise 6–7 days per week)</label>
					<input
						type="radio"
						id="extra_active"
						name="activity"
						value="1.9"
						onChange={e => setActivity(e.target.value)}
					/>
					<label className="pr-3">Extra Active (very hard exercise, training, or a physical job)</label>
				</form>
			</div>
			<div className="text-center pt-5">
				<button
					id="bmrButton"
					className="btn btn-warning"
					onClick={() => actions.bmrResult(weight, feet, inches, age, gender)}>
					Click for BMR
				</button>
			</div>
			<div className="text-center pt-5">
				<button
					id="bmrButton"
					className="btn btn-danger"
					onClick={() => actions.bmrActivityResult(weight, feet, inches, age, gender, activity)}>
					Click for BMR + Activity Level
				</button>
			</div>
			<div className="text-center text-dark pt-5">
				<h1>At rest you burn: {store.bmr} calories</h1>
			</div>
			<div className="text-center text-dark pt-5">
				<h1>Based on your activity level you burn: {store.bmr_activity} calories</h1>
			</div>
		</div>
	);
};
// <h3 id="bmi-display">YOUR BMR IS: </h3>;
/*
    ! 66 + (6.2 x weight) + (12.7 x height) – (6.76 x age) = BMR for males
    * 655.1 + (4.35 x weight) + (4.7 x height) – (4.7 x age) = BMR for females
*/
