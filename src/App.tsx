import React from "react";
import AddIcon from "./assets/Icons/add";
import { Button } from "./components/Button";

function App() {
	return (
		<div className="App">
			<Button size="small" styleVariation="primary" icon={<AddIcon />} iconPosition='centeredRight'>
				Teste
			</Button>
		</div>
	);
}

export default App;
