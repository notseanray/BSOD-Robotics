import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./navbar";
import { useState } from 'react';
import { BallTriangle } from  'react-loader-spinner'
import styles from "../styles/components.module.scss";

import { Home } 		from "./home";
import { About } 		from "./about";
import { First } 		from "./first";
import { Sponsors }		from "./sponsors";
import { Support }		from "./support";

function App() {
	const [loading, setLoading] = useState(false);

	if (!loading) {
		setTimeout(() => {
			setLoading(true)
		}, 500);
		return (
			<>
				<div className={styles.root}>
					<p>loading</p> 
					<BallTriangle color="#00BFFF" height={180} width={180} />
				</div>
			</>
		);
	}
	return (<>
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/"      		element={<Home 		/>}/>
				<Route path="/about"   		element={<About		/>}/>
				<Route path="/first"   		element={<First		/>}/>
				<Route path="/sponsors"		element={<Sponsors	/>}/>
				<Route path="/support"		element={<Support	/>}/>
			</Routes>
		</BrowserRouter>
	</>);
}

export default App;
