import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Navigation } from "../component/navigation";
import PropTypes from "prop-types";

export const NutritionFacts = props => {
	const { store, actions } = useContext(Context);
	const [product, setProduct] = useState();
	const productId = props.match.params.id;
	console.log(props);
	return (
		<>
			<div>
				<Navigation />
			</div>
			<section className="performance-facts">
				<header className="performance-facts__header">
					<h1 className="performance-facts__title">Nutrition Facts</h1>
					<p>
						Serving Size {store.productInfo.length > 0 && store.productInfo[0].fields.nf_serving_size_qty}{" "}
						{store.productInfo.length > 0 && store.productInfo[0].fields.nf_serving_size_unit}
					</p>
					<p>
						Serving Per Container{" "}
						{store.productInfo.length > 0 && store.productInfo[0].fields.nf_servings_per_container
							? store.productInfo[0].fields.nf_servings_per_container
							: 1}
					</p>
				</header>
				<table className="performance-facts__table">
					<thead>
						<tr>
							<th colSpan="3" className="small-info">
								Amount Per Serving
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th colSpan="2">
								<b>Calories </b>
								{props.match.params.nf_calories}
							</th>
							<td>Calories from Fat {props.match.params.nf_calories_from_fat}</td>
						</tr>
						<tr className="thick-row">
							<td colSpan="3" className="small-info">
								<b>% Daily Value*</b>
							</td>
						</tr>
						<tr>
							<th colSpan="2">
								<b>Total Fat </b>
								{/* {props.match.params.nf_total_fat}g */}
							</th>
							<td>
								<b>22%</b>
							</td>
						</tr>
						<tr>
							<td className="blank-cell" />
							<th>
								Saturated Fat{" "}
								{store.productInfo.length > 0 && store.productInfo[0].fields.nf_saturated_fat
									? store.productInfo[0].fields.nf_saturated_fat
									: 0}
								g
							</th>
							<td>
								<b>22%</b>
							</td>
						</tr>
						<tr>
							<td className="blank-cell" />
							<th>
								Trans Fat{" "}
								{store.productInfo.length > 0 && store.productInfo[1].fields.nf_trans_fatty_acid
									? store.productInfo[1].fields.nf_trans_fatty_acid
									: 0}
								g
							</th>
							<td />
						</tr>
						<tr>
							<th colSpan="2">
								<b>Cholesterol </b>
								{store.productInfo.length > 0 && store.productInfo[0].fields.nf_cholesterol
									? store.productInfo[0].fields.nf_cholesterol
									: 0}
								mg
							</th>
							<td>
								<b>18%</b>
							</td>
						</tr>
						<tr>
							<th colSpan="2">
								<b>Sodium </b>
								{store.productInfo.length > 0 && store.productInfo[0].fields.nf_sodium
									? store.productInfo[0].fields.nf_sodium
									: 0}
								mg
							</th>
							<td>
								<b>2%</b>
							</td>
						</tr>
						<tr>
							<th colSpan="2">
								<b>Total Carbohydrate </b>
								{store.productInfo.length > 0 && store.productInfo[0].fields.nf_total_carbohydrate
									? store.productInfo[0].fields.nf_total_carbohydrate
									: 0}
								g
							</th>
							<td>
								<b>6%</b>
							</td>
						</tr>
						<tr>
							<td className="blank-cell" />
							<th>
								Dietary Fiber{" "}
								{store.productInfo.length > 0 && store.productInfo[0].fields.nf_dietary_fiber
									? store.productInfo[0].fields.nf_dietary_fiber
									: 0}
								g
							</th>
							<td>
								<b>4%</b>
							</td>
						</tr>
						<tr>
							<td className="blank-cell" />
							<th>
								Sugars{" "}
								{store.productInfo.length > 0 && store.productInfo[0].fields.nf_sugars
									? store.productInfo[0].fields.nf_sugars
									: 0}
								g
							</th>
							<td />
						</tr>
						<tr className="thick-end">
							<th colSpan="2">
								<b>Protein </b>
								{props.match.params.nf_protein} g
							</th>
							<td />
						</tr>
					</tbody>
				</table>

				<table className="performance-facts__table--grid">
					<tbody>
						<tr>
							<td colSpan="2">
								Vitamin A{" "}
								{store.productInfo.length > 0 && store.productInfo[0].fields.nf_vitamin_a_dv
									? store.productInfo[0].fields.nf_vitamin_a_dv
									: 0}
								%
							</td>
							<td>
								Vitamin C{" "}
								{store.productInfo.length > 0 && store.productInfo[0].fields.nf_vitamin_c_dv
									? store.productInfo[0].fields.nf_vitamin_c_dv
									: 0}
								%
							</td>
						</tr>
						<tr className="thin-end">
							<td colSpan="2">
								Calcium{" "}
								{store.productInfo.length > 0 && store.productInfo[0].nf_calcium_dv
									? store.productInfo[0].nf_calcium_dv
									: 0}
								%
							</td>
							<td>
								Iron{" "}
								{store.productInfo.length > 0 && store.productInfo[0].fields.nf_iron_dv
									? store.productInfo[0].fields.nf_iron_dv
									: 0}
								%
							</td>
						</tr>
					</tbody>
				</table>

				<p className="small-info">
					* Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be higher or lower
					depending on your calorie needs:
				</p>

				<table className="performance-facts__table--small small-info">
					<thead>
						<tr>
							<td colSpan="2" />
							<th>Calories:</th>
							<th>2,000</th>
							<th>2,500</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th colSpan="2">Total Fat</th>
							<td>Less than</td>
							<td>65g</td>
							<td>80g</td>
						</tr>
						<tr>
							<td className="blank-cell" />
							<th>Saturated Fat</th>
							<td>Less than</td>
							<td>20g</td>
							<td>25g</td>
						</tr>
						<tr>
							<th colSpan="2">Cholesterol</th>
							<td>Less than</td>
							<td>300mg</td>
							<td>300 mg</td>
						</tr>
						<tr>
							<th colSpan="2">Sodium</th>
							<td>Less than</td>
							<td>2,400mg</td>
							<td>2,400mg</td>
						</tr>
						<tr>
							<th colSpan="3">Total Carbohydrate</th>
							<td>300g</td>
							<td>375g</td>
						</tr>
						<tr>
							<td className="blank-cell" />
							<th colSpan="2">Dietary Fiber</th>
							<td>25g</td>
							<td>30g</td>
						</tr>
					</tbody>
				</table>

				<p className="small-info">Calories per gram:</p>
				<p className="small-info text-center">Fat 9 &bull; Carbohydrate 4 &bull; Protein 4</p>
			</section>
		</>
	);
};
