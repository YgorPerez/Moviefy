import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos";
import Error from "./pages/Error";
import Filme from "./pages/Filme";
import Header from "./components/header";

const Routes = () => {
	return (
		<div>
			<BrowserRouter>
				<Header></Header>
				<Switch>
					<Route exact path="/">
						<Home></Home>
					</Route>
					<Route exact path="/favoritos">
						<Favoritos></Favoritos>
					</Route>
					<Route exact path="/filme/:id">
						<Filme></Filme>
					</Route>
					<Route path="*">
						<Error></Error>
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default Routes;
