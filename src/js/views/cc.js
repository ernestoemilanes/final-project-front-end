import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Navigation } from "../component/navigation";
import { Link } from "react-router-dom";

export const Cc = () => {
	const { store, actions } = useContext(Context);
	const [product, setProduct] = useState();
	const apiProduct = store.productInfo;
	return (
		<>
			<div>
				<Navigation />
			</div>
			<div className="text-center">
				<input type="input" name="product" placeholder="product" onChange={e => setProduct(e.target.value)} />
				<button
					id="ccButton"
					className="button"
					onClick={() => actions.ccResult(product)}
					style={{ backgroundColor: "#28A745" }}>
					Search
				</button>
			</div>
			<div className="container">
				{apiProduct.length > 0 ? (
					<ul>
						{apiProduct.map((product, key) => {
							return (
								<li key={key}>
									<Link
										to={`/nutritionfacts/${product["_id"]}/${product.fields["item_name"]}/${
											product.fields["nf_calories"]
										}/${product.fields["nf_calories_from_fat"]}/${product.fields["nf_protein"]}/${
											product.fields["nf_serving_size_qty"]
										}/${product.fields["nf_serving_size_unit"]}/${
											product.fields["nf_servings_per_container"]
										}/${product.fields["nf_total_fat"]}/${product.fields["nf_saturated_fat"]}/${
											product.fields["nf_trans_fatty_acid"]
										}/${product.fields["nf_cholesterol"]}/${product.fields["nf_sodium"]}/${
											product.fields["nf_total_carbohydrate"]
										}/${product.fields["nf_dietary_fiber"]}/${product.fields["nf_sugars"]}/${
											product.fields["nf_vitamin_a_dv"]
										}/${product.fields["nf_vitamin_c_dv"]}/${product.fields["nf_calcium_dv"]}/${
											product.fields["nf_iron_dv"]
										}
											
										`}>
										<h2>{product.fields["item_name"]}</h2>
									</Link>
								</li>
								// {store.productInfo.length > 0 && store.productInfo[0].fields.nf_serving_size_qty}
							);
						})}
					</ul>
				) : (
					<h2>Example</h2>
				)}
			</div>
		</>
	);
};
