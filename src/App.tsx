import React from "react";
import AddIcon from "./assets/Icons/add";
import { Button } from "./components/Button";

function App() {
	return (
		<div className="App">
			<Button size="large" styleVariation="primary" icon={<AddIcon />} iconPosition="right">
				Teste
			</Button>
		</div>
	);
}

export default App;
