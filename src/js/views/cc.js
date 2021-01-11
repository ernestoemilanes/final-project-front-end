import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Navigation } from "../component/navigation";

export const Cc = () => {
	const { store, actions } = useContext(Context);
	const [product, setProduct] = useState();
	return (
		<div className="container" style={{ backgroundSize: "100%" }}>
			<div>
				<Navigation />
			</div>
			<h1 className="text-center text-light pt-5">Food Nutritional Values</h1>
			<div id="block" className="row justify-content-center text-warning text-center pt-3">
				<div className="col-md-5">
					<form>
						<h3>List of Foods</h3>
						<input
							type="radio"
							id="steak"
							name="product_name"
							value="steak"
							onChange={e => setProduct(e.target.value)}
						/>
						<label className="pr-3">Steak</label>
						<input
							type="radio"
							id="chicken"
							name="product_name"
							value="chicken"
							onChange={e => setProduct(e.target.value)}
						/>
						<label className="pr-3">Chicken</label>
						<input
							type="radio"
							id="salmon"
							name="product_name"
							value="salmon"
							onChange={e => setProduct(e.target.value)}
						/>
						<label className="pr-3">Salmon</label>
					</form>
				</div>
				<div className="col-md-5">
					<h3>Calories: {store.productInfo.length > 0 && store.productInfo[0].fields.nf_calories}</h3>
					<h3>
						{" "}
						Cals from fat:{" "}
						{store.productInfo.length > 0 && store.productInfo[0].fields.nf_calories_from_fat}
					</h3>
					<h3>Total Fat: {store.productInfo.length > 0 && store.productInfo[0].fields.nf_total_fat}</h3>
					<h3>
						Saturated Fat: {store.productInfo.length > 0 && store.productInfo[0].fields.nf_saturated_fat}
					</h3>
					<h3>Sodium: {store.productInfo.length > 0 && store.productInfo[0].fields.nf_sodium}</h3>
					<h3>Sugar: {store.productInfo.length > 0 && store.productInfo[0].fields.nf_sugars}</h3>
					<h3>Fiber: {store.productInfo.length > 0 && store.productInfo[0].fields.nf_dietary_fiber}</h3>
					<h3>Protein: {store.productInfo.length > 0 && store.productInfo[0].fields.nf_protein}</h3>
					<h3>
						Ingredients:
						{store.productInfo.length > 0 && store.productInfo[0].fields.nf_ingredient_statement}
					</h3>
				</div>
			</div>
			<div className="text-center pt-5">
				<button id="ccButton" className="btn btn-warning" onClick={() => actions.ccResult(product)}>
					Click for Nutritional Value
				</button>
			</div>
		</div>
	);
};
