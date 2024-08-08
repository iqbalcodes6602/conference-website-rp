import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Registration from "./pages/Registration";
import ImportantDates from "./pages/ImportantDates";
import Committee from "./pages/Committee";
// import Login from "./pages/Login";
// import Register from "./pages/Register";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/*' element={<Home />} />
				<Route path='/home' element={<Home />} />
				<Route path='/important-dates' element={<ImportantDates />} />
				<Route path='/registration' element={<Registration />} />
				<Route path='/committee' element={<Committee />} />
				<Route path='/contact' element={<Contact />} />
				{/* <Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} /> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
