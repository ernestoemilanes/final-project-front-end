import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Bmi } from "./views/bmi";
import { Bmr } from "./views/bmr";
import { Workouts } from "./views/workouts";
import { Cc } from "./views/cc";
import { Login } from "./views/login";
import { Createacc } from "./views/createacc";
import { About } from "./views/about";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { NutritionFacts } from "./views/nutritionfacts";
import injectContext from "./store/appContext";
import "../styles/home.scss";
import "../styles/cc.scss";

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
						<Route exact path="/cc" component={Cc} />
						<Route exact path="/workouts" component={Workouts} />
						<Route
							exact
							path="/nutritionfacts/:id/:name/:nf_calories/:nf_calories_from_fat/:nf_protein/:nf_serving_size_qty/:nf_serving_size_unit/:nf_servings_per_container/:nf_total_fat/:nf_saturated_fat/:nf_trans_fatty_acid/:nf_cholesterol/:nf_sodium/:nf_total_carbohydrate/:nf_dietary_fiber/:nf_sugars/:nf_vitamin_a_dv/:nf_vitamin_c_dv/:nf_calcium_dv/:nf_iron_dv/:item_name"
							component={NutritionFacts}
						/>
						<Route exact path="/bmi" component={Bmi} />
						<Route exact path="/bmr" component={Bmr} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/signup" component={Createacc} />
						<Route exact path="/about" component={About} />
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
