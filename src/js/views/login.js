import React, { useState, useContext } from "react";
import { Navigation } from "../component/navigation";
import { Context } from "../store/appContext";

import manRunning from "../../img/man-running.png";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	return (
		<div className="container">
			<div>
				<Navigation />
			</div>
			<div className="row content pt-5">
				<div className="col-md-6 mb-3">
					<img src={manRunning} className="img-fluid" alt="image" />
				</div>
				<div className="col-md-6 mb-3">
					<h3 className="signin-text mb-3 text-center text-light"> Sign In</h3>
					<form>
						<div className="form-group">
							<label className="text-light">Email</label>
							<input
								type="email"
								name="email"
								className="form-control"
								onChange={e => setEmail(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<label className="text-light">Password</label>
							<input
								type="password"
								name="password"
								className="form-control"
								onChange={e => setPassword(e.target.value)}
							/>
						</div>
						<div className="form-group form-check">
							<input type="checkbox" name="checkbox" className="form-check-input" id="checkbox" />
							<label className="form-check-label">Remember Me</label>
						</div>
						<div className="text-center">
							<button
								type="button"
								className="btn btn-warning btn-class"
								onClick={() => actions.loginUser(password, email)}>
								Login
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
