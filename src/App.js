import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
	const [isOpen, setIsOpen] = useState(false);
	const [darkMode, setDarkMode] = useState(false);

	const toggleNav = () => {
		setIsOpen(!isOpen);
	};

	const toggleMode = () => {
		setDarkMode(!darkMode);
	};

	return (
		<div className="App">
			<Router>
				<Sidebar isOpen={isOpen} toggle={toggleNav} mode={darkMode} />
				<Navbar
					toggle={toggleNav}
					toggleDarkMode={toggleMode}
					mode={darkMode}
				/>
				<Switch></Switch>
			</Router>
		</div>
	);
}

export default App;
