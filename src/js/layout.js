import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Bmi } from "./views/bmi";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

// import { Navbar } from "./component/navbar";
// import { Footer } from "./component/footer";
import "../styles/home.scss";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<header>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					{/** NAVBAR GOES HERE */}
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exat path="/bmi" component={Bmi} />
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</header>
	);
};

export default injectContext(Layout);
