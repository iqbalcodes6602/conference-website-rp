import React from "react";

import Hero from "../sections/home/hero";
import Faq from "../sections/home/faq";
import EventContent from "../sections/home/event-content";
import OurStats from "../sections/home/our-stats";
import AboutEvent from "../sections/home/about-event";
import Footer from "../components/footer";
import Header from "../components/header";
import JoinNow from "../sections/home/join-now";
import Announcements from "../sections/home/announcement";


const Home = () => {
	return (
		<div>
			<Header page='home' />
			<Hero />
			<Announcements />
			<AboutEvent />
			<OurStats />
			<EventContent />
			<Faq />
			<JoinNow />
			<Footer />
		</div>
	);
};

export default Home;
