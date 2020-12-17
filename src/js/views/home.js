import React from "react";
import manRunning from "../../img/man-running.png";

export const Home = () => (
	<>
		{/* Container Fluid */}
		<div className="container-fluid p-0">
			{/* Navbar */}
			<nav className="navbar navbar-expand-lg ">
				<a className="navbar-brand" href="#">
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
							<a className="nav-link" href="#">
								Home <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item dropdown">
							<div className="dropdown">
								<a href="#" className="nav-link">
									Apps
								</a>
								<div className="dropdown-content">
									<a href="#">Calories Counter</a>
									<a href="#">Water Tracker</a>
									<a href="/bmi">BMI</a>
								</div>
							</div>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								About
							</a>
						</li>
					</ul>
				</div>
			</nav>
			{/* End of Navbar */}
		</div>
		{/* End of Container Fluid */}
		{/* Jumbotron */}
		<div className="container text-center">
			<div className="row">
				<div className="col-md-7 col-sm-12">
					<h1>“We are what we repeatedly do. Excellence then is not an act but a habit.”</h1>
					<h6>ARISOTLE</h6>
				</div>
				<div className="col-md-5 col-sm-12 h-15">
					<img src={manRunning} alt="Running" />
				</div>
			</div>
		</div>
		{/* End of Jumbotron */}
	</>
);
