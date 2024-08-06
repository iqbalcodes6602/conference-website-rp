import React from "react";

import Hero from "./sections/hero";
import SponsoredBy from "./sections/sponsored-by";
import Faq from "./sections/faq";
import EventContent from "./sections/event-content";
import OurStats from "./sections/our-stats";
import AboutEvent from "./sections/about-event";
import Footer from "./sections/footer";
import Header from "./sections/header";


const Home = () => {
	return (
		<div>
			<Header />
			<Hero />
			<SponsoredBy />
			<AboutEvent />
			<OurStats />
			<EventContent />
			<Faq />
			<Footer />
		</div>
	);
};

export default Home;
