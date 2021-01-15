import React, { useContext } from "react";
import { Navigation } from "../component/navigation";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Favorites = props => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<div>
				<Navigation />
			</div>
			<div className="container">
				<ul className="mt-5">
					{store.currentUser.user_intakes.map((userIntake, index) => {
						return (
							<li key={index}>
								<Link
									to={`/nutritionfacts/${userIntake["id"]}/${userIntake["item_name"]}/${
										userIntake["nf_calories"]
									}/${userIntake["nf_calories_from_fat"]}/${userIntake["nf_protein"]}/${
										userIntake["nf_serving_size_qty"]
									}/${userIntake["nf_serving_size_unit"]}/${
										userIntake["nf_servings_per_container"]
									}/${userIntake["nf_total_fat"]}/${userIntake["nf_saturated_fat"]}/${
										userIntake["nf_trans_fatty_acid"]
									}/${userIntake["nf_cholesterol"]}/${userIntake["nf_sodium"]}/${
										userIntake["nf_total_carbohydrate"]
									}/${userIntake["nf_dietary_fiber"]}/${userIntake["nf_sugars"]}/${
										userIntake["nf_vitamin_a_dv"]
									}/${userIntake["nf_vitamin_c_dv"]}/${userIntake["nf_calcium_dv"]}/${
										userIntake["nf_iron_dv"]
									}/${userIntake["item_name"]}
											
										`}>
									<h2>{userIntake["item_name"]}</h2>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
};
