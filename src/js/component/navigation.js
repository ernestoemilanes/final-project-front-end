import React from "react";

export const Navigation = () => (
	<>
		{/* Container Fluid */}
		<div className="container-fluid p-0">
			{/* Navbar */}
			<nav className="navbar navbar-expand-lg ">
				<a className="navbar-brand" href="/">
					Fitness App
				</a>
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
							<a className="nav-link" href="/">
								Home <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item dropdown">
							<div className="dropdown">
								<a href="#" className="nav-link">
									Apps
								</a>
								<div className="dropdown-content">
									<a href="/cc">Calories Counter</a>
									<a href="/workouts">Workouts</a>
									<a href="/bmi">BMI</a>
									<a href="/bmr">BMR</a>
								</div>
							</div>
						</li>
						<li className="nav-item dropdown">
							<div className="dropdown">
								<a href="#" className="nav-link">
									Fitness Account
								</a>
								<div className="dropdown-content">
									<a href="/login">Login</a>
									<a href="/signup">Create Account</a>
								</div>
							</div>
						</li>
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
