import { Typography, Button } from "@material-tailwind/react";
import React from "react";
import connect from "../images/connect.jpg";

const FirstSection = () => {
	return (
		<div className='w-full lg:p-8 p-4 flex items-center justify-between'>
			<div className='lg:w-[40%] w-full lg:block hidden '>
				<img src={connect} alt='Hero' />
			</div>
			<div className='lg:w-[60%] w-full lg:px-6 lg:pl-10'>
				<Typography className='text-3xl font-extrabold font-poppins mb-4'>
					Create a great circle of friends
				</Typography>
				<Typography className='font-poppins mb-6'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore.
				</Typography>
				<Button size='lg' color='purple'>
					learn more
				</Button>
			</div>
		</div>
	);
};

export default FirstSection;
