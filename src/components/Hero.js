import { Button, Typography } from "@material-tailwind/react";
import React from "react";

import hero from "../images/meetup.jpg";

const Hero = () => {
	return (
		<div className='w-full lg:p-8 px-4 flex items-center justify-between min-h-[80vh] heroContainer '>
			<div className='lg:w-[60%] w-full lg:px-6 lg:pr-14'>
				<Typography className='text-2xl font-extrabold font-poppins mb-4'>
					Free Material-Tailwind Sample
					<Button>asa</Button>
				</Typography>
				<Typography className='font-poppins mb-6'>
					Material Tailwind is a free and open-source UI library inspired by Material Design that provides a unique experience for developers working with React and Tailwind CSS.
					<br />
					Actively supported by <a target="_blank" rel="noreferrer" href="https://bit.ly/3fKQZaL">Creative-Tim</a>.
				</Typography>
				<Button size='lg' color='purple'>
					<a target="_blank" rel="noreferrer" href="https://github.com/app-generator/sample-material-tailwind">Download</a> 
				</Button>
			</div>
			<div className='lg:w-[40%] w-full lg:block hidden '>
				<img src={hero} alt='Hero' />
			</div>
		</div>
	);
};

export default Hero;
