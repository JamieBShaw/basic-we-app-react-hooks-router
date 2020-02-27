import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NoMatch from "./components/NoMatch";
import Layout from "./components/Layout";
import NavigationBar from "./components/NavigationBar";
import Jumbotron from "./components/Jumbotron";

function App() {
	return (
		<>
			<Router>
				<NavigationBar />
				<Jumbotron />
				<Layout>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/about" component={About} />
						<Route path="/contact" component={Contact} />
						<Route component={NoMatch} />
					</Switch>
				</Layout>
			</Router>
		</>
	);
}

export default App;
