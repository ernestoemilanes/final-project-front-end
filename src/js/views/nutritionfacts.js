import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Navigation } from "../component/navigation";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

export const NutritionFacts = props => {
	const { store, actions } = useContext(Context);
	const [product, setProduct] = useState();
	const [itemName, setItemName] = useState(props.match.params.item_name);
	const [servingSizeQty, setServingSizeQty] = useState(props.match.params.nf_serving_size_qty);
	const [servingSizeUnit, setServingSizeUnit] = useState(props.match.params.nf_serving_size_unit);
	const [calories, setCalories] = useState(props.match.params.nf_calories);
	const [caloriesFromFat, setCaloriesFromFat] = useState(props.match.params.nf_calories_from_fat);
	const [totalFat, setTotalFat] = useState(props.match.params.nf_total_fat);
	const [saturatedFats, setSaturatedFats] = useState(props.match.params.nf_saturated_fat);
	const [transFat, setTransFat] = useState(props.match.params.nf_trans_fatty_acid);
	const [cholesterol, setCholesterol] = useState(props.match.params.nf_cholesterol);
	const [sodium, setSodium] = useState(props.match.params.nf_sodium);
	const [carbohydrate, setCarbohydrate] = useState(props.match.params.nf_total_carbohydrate);
	const [fiber, setFiber] = useState(props.match.params.nf_dietary_fiber);
	const [sugars, setSugars] = useState(props.match.params.nf_sugars);
	const [protein, setProtein] = useState(props.match.params.nf_protein);
	const [vitaminA, setVitaminA] = useState(props.match.params.nf_vitamin_a_dv);
	const [vitaminC, setVitaminC] = useState(props.match.params.nf_vitamin_c_dv);
	const [calcium, setCalcium] = useState(props.match.params.nf_calcium_dv);
	const [iron, setIron] = useState(props.match.params.nf_iron_dv);
	const productId = props.match.params.id;
	const history = useHistory();
	return (
		<>
			<div>
				<Navigation />
			</div>
			<div className="text-center">
				<button
					type="button"
					className="btn btn-dark btn-class mr-3"
					onClick={e => history.goBack()}
					style={{ backgroundColor: "black" }}>
					<i className="fas fa-arrow-left" style={{ backgroundColor: "black" }} /> {"Go Back"}
				</button>
				<button
					type="button"
					className="btn btn-danger btn-class ml-3"
					style={{ backgroundColor: "red" }}
					onClick={async () => {
						const savedProduct = await actions.createSave(
							itemName,
							servingSizeQty,
							servingSizeUnit,
							calories,
							caloriesFromFat,
							totalFat,
							saturatedFats,
							transFat,
							cholesterol,
							sodium,
							carbohydrate,
							fiber,
							sugars,
							protein,
							vitaminA,
							vitaminC,
							calcium,
							iron
						);
						if (savedProduct === true) {
							history.push("/");
						} else {
							//show error
						}
					}}>
					Save <i className="fas fa-heart" style={{ backgroundColor: "red" }} />
				</button>
			</div>
			<section className="performance-facts mt-5">
				<header className="performance-facts__header">
					<h1 className="performance-facts__title">Nutrition Facts</h1>
					<p>
						Serving Size {props.match.params.nf_serving_size_qty} {props.match.params.nf_serving_size_unit}
					</p>
					<p>Serving Per Container 1</p>
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
								{props.match.params.nf_total_fat}g
							</th>
							<td>
								<b>22%</b>
							</td>
						</tr>
						<tr>
							<td className="blank-cell" />
							<th>Saturated Fat {props.match.params.nf_saturated_fat}g</th>
							<td>
								<b>22%</b>
							</td>
						</tr>
						<tr>
							<td className="blank-cell" />
							<th>Trans Fat {props.match.params.nf_trans_fatty_acid}g</th>
							<td />
						</tr>
						<tr>
							<th colSpan="2">
								<b>Cholesterol </b>
								{props.match.params.nf_cholesterol}
								mg
							</th>
							<td>
								<b>18%</b>
							</td>
						</tr>
						<tr>
							<th colSpan="2">
								<b>Sodium </b>
								{props.match.params.nf_sodium}
								mg
							</th>
							<td>
								<b>2%</b>
							</td>
						</tr>
						<tr>
							<th colSpan="2">
								<b>Total Carbohydrate </b>
								{props.match.params.nf_total_carbohydrate}g
							</th>
							<td>
								<b>6%</b>
							</td>
						</tr>
						<tr>
							<td className="blank-cell" />
							<th>Dietary Fiber {props.match.params.nf_dietary_fiber}g</th>
							<td>
								<b>4%</b>
							</td>
						</tr>
						<tr>
							<td className="blank-cell" />
							<th>Sugars {props.match.params.nf_sugars}g</th>
							<td />
						</tr>
						<tr className="thick-end">
							<th colSpan="2">
								<b>Protein </b>
								{props.match.params.nf_protein}g
							</th>
							<td />
						</tr>
					</tbody>
				</table>

				<table className="performance-facts__table--grid">
					<tbody>
						<tr>
							<td colSpan="2">Vitamin A {props.match.params.nf_vitamin_a_dv}%</td>
							<td>Vitamin C {props.match.params.nf_vitamin_c_dv}%</td>
						</tr>
						<tr className="thin-end">
							<td colSpan="2">Calcium {props.match.params.nf_calcium_dv}%</td>
							<td>Iron {props.match.params.nf_iron_dv}%</td>
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
