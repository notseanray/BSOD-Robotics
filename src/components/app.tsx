import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./navbar";
import ReactDOM from "react-dom";

import { Home } 		from "./home";

function App() {
	return (<>
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/"      		element={<Home 		/>}/>
			</Routes>
		</BrowserRouter>
	</>);
}

export default App;
