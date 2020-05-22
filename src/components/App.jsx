import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";

class App extends Component {
	render() {
		return (
			<Router>
				<Navbar />
				<div>
					<h3>hello</h3>
				</div>
				<Footer />
			</Router>
		);
	}
}

export default App;
