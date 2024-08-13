import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Registration from "./pages/Registration";
import ImportantDates from "./pages/ImportantDates";
import Committee from "./pages/Committee";
import VenueAccommodation from "./pages/VenueAccommodation";
import Submission from "./pages/Submission";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/*' element={<Home />} />
				<Route path='/home' element={<Home />} />
				<Route path='/submission' element={<Submission />} />
				<Route path='/important-dates' element={<ImportantDates />} />
				<Route path='/registration' element={<Registration />} />
				<Route path='/committee' element={<Committee />} />
				<Route path='/venue-accommodation' element={<VenueAccommodation />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;