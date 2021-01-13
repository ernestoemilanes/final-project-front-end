import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navigation } from "../component/navigation";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<div>
				<Navigation />
			</div>
			<div className="text-center pt-4">
				<button className="btn btn-success btn-md" style={{ color: "#28A745" }}>
					<Link to="/signup">REGISTER</Link>
				</button>
			</div>
		</>
	);
};
