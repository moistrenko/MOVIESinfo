import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppContent from "components/AppContent";

import "./style.sass";

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<AppContent />
			</BrowserRouter>
		</div>
	);
}

export default App;
