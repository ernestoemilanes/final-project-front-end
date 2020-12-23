import React, { useState } from "react";
import { Navigation } from "../component/navigation";

import manRunning from "../../img/man-running.png";

export const Login = () => {
	const [user, setUser] = useState([]);
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
					<h3 className="signin-text mb-3"> Sign In</h3>
					<form>
						<div className="form-group">
							<label>Email</label>
							<input
								type="email"
								name="email"
								className="form-control"
								onChange={e => setUser(e.target.value)}
							/>
						</div>
						<div className="form-group">
							<label>Password</label>
							<input
								type="password"
								name="password"
								className="form-control"
								onChange={e => setUser(e.target.value)}
							/>
						</div>
						<div className="form-group form-check">
							<input type="checkbox" name="checkbox" className="form-check-input" id="checkbox" />
							<label className="form-check-label">Remember Me</label>
						</div>
						<button className="btn btn-class" onClick={() => setUser([...user, input])}>
							Login
						</button>
						{user.map((items, index) => {
							return (
								<div className="userItems" key={index}>
									{items}
								</div>
							);
						})}
					</form>
				</div>
			</div>
		</div>
	);
};
