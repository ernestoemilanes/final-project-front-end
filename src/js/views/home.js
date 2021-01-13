import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import manRunning from "../../img/man-running.png";
import { Navigation } from "../component/navigation";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<Navigation />
		</div>
	);
};
