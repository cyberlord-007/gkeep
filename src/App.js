import React, { useState, useEffect } from "react";
import { PageContainer } from "./global/PageStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import FAB from "./components/FloatingActionButton/FAB";
import NotesPage from "./views/NotesPage/NotesPage";
import PinnedPage from "./views/PinnedPage/PinnedPage";
import ArchivedPage from "./views/ArchivedPage/ArchivedPage";
import PageWrapper from "./global/PageWrapper";

function App() {
	const [openNav, setOpenNav] = useState(false);
	const [darkMode, setDarkMode] = useState(false);

	const toggleNav = () => {
		setOpenNav(!openNav);
	};

	const toggleMode = () => {
		setDarkMode(!darkMode);
	};

	return (
		<div className="App">
			<PageContainer mode={darkMode}>
				<PageWrapper>
					<Router>
						<Sidebar isOpen={openNav} toggle={toggleNav} mode={darkMode} />
						<Navbar
							toggle={toggleNav}
							toggleDarkMode={toggleMode}
							mode={darkMode}
						/>
						<FAB mode={darkMode} />
						<Switch>
							<Route
								exact
								path="/"
								component={() => <NotesPage mode={darkMode} />}
							/>
							<Route
								exact
								path="/pinned"
								component={() => <PinnedPage mode={darkMode} />}
							/>
							<Route
								exact
								path="/archived"
								component={() => <ArchivedPage mode={darkMode} />}
							/>
						</Switch>
					</Router>
				</PageWrapper>
			</PageContainer>
		</div>
	);
}

export default App;
