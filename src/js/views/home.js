import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import manRunning from "../../img/man-running.png";
import { Navigation } from "../component/navigation";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			{/* Container Fluid */}
			<Navigation />
			{/* End of Container Fluid */}
			{/* Jumbotron */}
			<div className="container text-center">
				<div className="row">
					<div className="col-md-7 col-sm-12 text-white">
						<h1>“We are what we repeatedly do. Excellence then is not an act but a habit.”</h1>
						{/* <h6>ARISOTLE</h6> */}
						{/* <button className="btn btn-warning">GET STARTED</button> */}
					</div>
					<div className="col-md-5 col-sm-12">
						<img src={manRunning} alt="Running" />
					</div>
				</div>
			</div>
			{/* End of Jumbotron */}
		</>
	);
};
