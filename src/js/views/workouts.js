import React from "react";
import { Navigation } from "../component/navigation";
import manRunning from "../../img/man-running.png";
import rigoBaby from "../../img/rigo-baby.jpg";

export const Workouts = () => (
	<div className="container">
		<div>
			<Navigation />
		</div>
		<h1 className="text-center">Workout of the week</h1>
		<div className="row content pt-5">
			<div className="col-md-6 mb-3">
				<h3>MONDAY: Back and Biceps</h3>
			</div>
			<div className="col-md-6 mb-3">
				<img src={rigoBaby} className="img-fluid" alt="image" />
			</div>
		</div>
		<div className="row content pt-5">
			<div className="col-md-6 mb-3">
				<h3>TUESDAY: Chest, Shoulders, and Triceps</h3>
			</div>
			<div className="col-md-6 mb-3">
				<img src={rigoBaby} className="img-fluid" alt="image" />
			</div>
		</div>
		<div className="row content pt-5">
			<div className="col-md-6 mb-3">
				<h3>WEDNESDAY: REST!</h3>
			</div>
			<div className="col-md-6 mb-3">
				<img src={rigoBaby} className="img-fluid" alt="image" />
			</div>
		</div>
		<div className="row content pt-5">
			<div className="col-md-6 mb-3">
				<h3>THURSDAY: Legs</h3>
			</div>
			<div className="col-md-6 mb-3">
				<img src={rigoBaby} className="img-fluid" alt="image" />
			</div>
		</div>
		<div className="row content pt-5">
			<div className="col-md-6 mb-3">
				<h3>FRIDAY: Abs</h3>
			</div>
			<div className="col-md-6 mb-3">
				<img src={rigoBaby} className="img-fluid" alt="image" />
			</div>
		</div>
		<div className="row content pt-5">
			<div className="col-md-6 mb-3">
				<h3>SATURDAY: Cardio</h3>
			</div>
			<div className="col-md-6 mb-3">
				<img src={rigoBaby} className="img-fluid" alt="image" />
			</div>
		</div>
		<div className="row content pt-5">
			<div className="col-md-6 mb-3">
				<h3>SUNDAY: REST!</h3>
			</div>
			<div className="col-md-6 mb-3">
				<img src={rigoBaby} className="img-fluid" alt="image" />
			</div>
		</div>
	</div>
);
