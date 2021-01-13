import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Navigation } from "../component/navigation";
import { Context } from "../store/appContext";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const history = useHistory();
	return (
		<>
			<div>
				<Navigation />
			</div>
			<div className="container-fluid py-3 mt-5" style={{ backgroundColor: "#F8F9FA" }}>
				<div className="row">
					<div className="col-md-6 mx-auto">
						<div className="card card-body" style={{ backgroundColor: "#F8F9FA", borderRadius: "15px" }}>
							<h3 className="text-center text-success mb-4">Log-in</h3>
							<div className="input-group mb-3">
								<div className="input-group-prepend">
									<span className="input-group-text" id="basic-addon1">
										<i className="fas fa-at" />
									</span>
								</div>
								<input
									type="email"
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
										const loggedIn = await actions.loginUser(email, password);
										if (loggedIn === true) {
											history.push("/");
										} else {
											//show error
										}
									}}>
									Login
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
