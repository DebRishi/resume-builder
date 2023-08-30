import { useState } from "react";

import "./App.css";
import Layout from "./components/Layout";

export default function App() {
	
	const [font, setFont] = useState("Arial");
	
	return (
		<div className="main" style={{ fontFamily: font }}>
			<Layout setFont={setFont} />
		</div>
	);
}
