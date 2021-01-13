import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import manRunning from "../../img/man-running.png";
import { Navigation } from "../component/navigation";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<div>
				<Navigation />
			</div>
			<div className="container">
				<p className="text-center" style={{ fontSize: "2em" }}>
					FitRef was created to educate/inform its users about their physical health. Once you{" "}
					<Link to="/signup">register</Link>, you will be able to explore a series of apps that include: BMR
					(Basal Metabolic Rate) and BMI (Body Mass Index). The user can also check out the nutrition label
					for meals, snacks, and drinks without having to actually buy that product ;). STAY HEALTHY!
				</p>
			</div>
		</>
	);
};
