import React, { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Registration from "./pages/Registration";
import ImportantDates from "./pages/ImportantDates";
import Committee from "./pages/Committee";
import VenueAccommodation from "./pages/VenueAccommodation";
import Submission from "./pages/Submission";
import { UserContext } from './UserContext'; // Import the UserProvider
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ViewAllUsers from "./sections/adminDashboard/view-all-users";
import ViewAllUserSubmissions from "./sections/adminDashboard/view-all-users-submissions";
import AddNewSubmission from "./sections/userDashboard/add-new-submission";

function App() {
	const { user, login, logout, isUserValid } = useContext(UserContext);

	useEffect(() => {
		try {
			if (!isUserValid()) {
				logout();
			}
		} catch (error) {
			logout();
		}
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/*' element={<Home />} />
				<Route path='/home' element={<Home />} />
				<Route path='/submission' element={<Submission />} />
				<Route path='/important-dates' element={<ImportantDates />} />
				<Route path='/registration' element={user ? <Home /> : <Registration />} />
				<Route path='/committee' element={<Committee />} />
				<Route path='/venue-accommodation' element={<VenueAccommodation />} />
				<Route path='/contact' element={<Contact />} />


				{/* user routes */}
				{user &&
					<>
						<Route path='/user/dashboard' element={<UserDashboard />} />
						<Route path='/user/dashboard/add-new-submission' element={<AddNewSubmission />} />
					</>
				}

				{/* admin routes */}
				{user && user.role === 'admin' &&
					<>
						<Route path='/admin/dashboard' element={<AdminDashboard />} />
						<Route path='/admin/dashboard/view-all-users' element={<ViewAllUsers />} />
						<Route path='/admin/dashboard/view-all-user-submissions' element={<ViewAllUserSubmissions />} />
					</>
				}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
