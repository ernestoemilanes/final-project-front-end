import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navigation = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			{/* Container Fluid */}
			<div className="container-fluid p-0">
				{/* Navbar */}
				<nav className="navbar navbar-expand-lg ">
					<Link to="/" className="navbar-brand">
						Fitness App
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
										<a href="#" className="nav-link">
											Apps
										</a>
										<div className="dropdown-content">
											<a href="/bmi">Calories Counter</a>
											{/* <a href="/workouts">Workouts</a> */}
											<a href="/bmi">BMI</a>
											<a href="/bmr">BMR</a>
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
								<a className="nav-link" href="/about">
									About Us
								</a>
							</li>
						</ul>
					</div>
				</nav>
				{/* End of Navbar */}
			</div>
			{/* End of Container Fluid */}
		</>
	);
};
