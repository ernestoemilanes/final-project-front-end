import React, { useState, useContext } from "react";
import { Navigation } from "../component/navigation";

import { Context } from "../store/appContext";

import manRunning from "../../img/man-running.png";

export const Createacc = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState();
	const [firstName, setFirstName] = useState();
	const [lastName, setLastName] = useState();
	const [password, setPassword] = useState();
	return (
		<>
			<div>
				<Navigation />
			</div>
			<div className="container-fluid py-3 mt-5">
				<div className="row">
					<div className="col-md-6 mx-auto">
						<div className="card card-body" style={{ backgroundColor: "#F8F9FA", borderRadius: "15px" }}>
							<h3 className="text-center text-success mb-4">Sign-up</h3>
							<fieldset>
								<div className="input-group mb-3">
									<div className="input-group-prepend">
										<span className="input-group-text" id="basic-addon1">
											<i className="fas fa-user-circle" />
										</span>
									</div>
									<input
										placeholder="First Name"
										type="first-name"
										name="first-name"
										className="form-control"
										onChange={e => setFirstName(e.target.value)}
									/>
								</div>

								<div className="input-group mb-3">
									<div className="input-group-prepend">
										<span className="input-group-text" id="basic-addon1">
											<i className="fas fa-address-book" />
										</span>
									</div>
									<input
										placeholder="Last Name"
										type="last-name"
										name="last-name"
										className="form-control"
										onChange={e => setLastName(e.target.value)}
									/>
								</div>

								<div className="input-group mb-3">
									<div className="input-group-prepend">
										<span className="input-group-text" id="basic-addon1">
											<i className="fas fa-at" />
										</span>
									</div>
									<input
										type="email"
										placeholder="Email"
										name="email"
										className="form-control"
										onChange={e => setEmail(e.target.value)}
									/>
								</div>

								<div className="input-group mb-3">
									<div className="input-group-prepend">
										<span className="input-group-text" id="basic-addon1">
											<i className="fas fa-key" />
										</span>
									</div>
									<input
										type="password"
										name="password"
										className="form-control"
										placeholder="Password"
										onChange={e => setPassword(e.target.value)}
									/>
								</div>
								<div className="checkbox">
									<label className="small">
										<input name="terms" type="checkbox" />I have read and agree to the{" "}
										<a href="#">terms of service</a>
									</label>
								</div>
								<div className="text-center">
									<button
										type="button"
										className="btn btn-success btn-class"
										onClick={async () => {
											const signedIn = await actions.createUser(
												firstName,
												lastName,
												password,
												email
											);
											if (signedIn === true) {
												history.push("/");
											} else {
												//show error
											}
										}}>
										<i className="far fa-heart" />
									</button>
								</div>
							</fieldset>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
