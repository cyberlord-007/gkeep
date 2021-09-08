import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Switch></Switch>
			</Router>
		</div>
	);
}

export default App;
