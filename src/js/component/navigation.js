import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import ref from "/workspace/react-hello-webapp/src/img/referee.png";

export const Navigation = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	return (
		<>
			{/* Container Fluid */}
			<div className="container-fluid p-0">
				{/* Navbar */}
				<nav className="navbar navbar-expand-lg ">
					<Link to="/" className="navbar-brand" style={{ fontSize: "2em" }}>
						<img src={ref} className="img-fluid" alt="image" />
						FitRef
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<div className="mr-auto" />
						<ul className="navbar-nav">
							<li className="nav-item active">
								<Link to="/" className="nav-link">
									Home <span className="sr-only">(current)</span>
								</Link>
							</li>
							{store.token !== null && (
								<li className="nav-item dropdown">
									<div className="dropdown">
										<Link to="#" className="nav-link">
											Apps
										</Link>
										<div className="dropdown-content">
											<Link to="/cc">Nutrition Values</Link>
											{/* <Link to="/workouts">Workouts</Link> */}
											<Link to="/bmr">BMR (Basal Metabolic Rate)</Link>
											<Link to="/bmi">BMI (Body Mass Index) </Link>
										</div>
									</div>
								</li>
							)}
							{store.token === null && (
								<li className="nav-item dropdown">
									<div className="dropdown">
										<Link to="#" className="nav-link">
											Fitness Account
										</Link>
										<div className="dropdown-content">
											<Link to="/login">Login</Link>
											<Link to="/signup">Create Account</Link>
										</div>
									</div>
								</li>
							)}
							<li className="nav-item">
								<Link to="/about" className="nav-link">
									About Us
								</Link>
							</li>
							{store.token !== null && (
								<li className="nav-item">
									<button
										type="button"
										className="btn btn-success"
										style={{ color: "black", fontSize: "1em", fontWeight: "500" }}
										onClick={() => {
											store.token = null;
											history.push("/");
										}}>
										Logout
									</button>
								</li>
							)}
						</ul>
					</div>
				</nav>
				{/* End of Navbar */}
			</div>
			{/* End of Container Fluid */}
		</>
	);
};
