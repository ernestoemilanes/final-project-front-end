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
			<h1 className="text-center text-light pt-5">Calories Counter</h1>
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
							id="fish"
							name="product_name"
							value="fish"
							onChange={e => setProduct(e.target.value)}
						/>
						<label className="pr-3">Fish</label>
					</form>
				</div>
				<div className="col-md-5">
					<h3>{store.product}</h3>
				</div>
			</div>
			<div className="text-center pt-5">
				<button id="ccButton" className="btn btn-warning" onClick={() => actions.ccResult(product)}>
					Click for Calories
				</button>
			</div>
		</div>
	);
};
