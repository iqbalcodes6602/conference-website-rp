import { Typography } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<>
			<nav className='h-[10vh] flex flex-row items-center px-3 justify-between top-0 sticky md:mb-4 bg-white z-50'>
				<div className='flex flex-row items-center'>
					<Typography className='font-bold text-lg font-poppins text-purple-600'>
						Meetup
					</Typography>
				</div>

				<div className='flex flex-row items-center space-x-2'>
					<Link
						to='/login'
						className='font-poppins text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800'
					>
						Login
					</Link>
					<Link
						to='/register'
						className='font-poppins text-gray-600 bg-gray-200 hover:bg-gray-600 hover:text-gray-50 focus:ring-4  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0'
					>
						Register
					</Link>
				</div>
			</nav>
		</>
	);
};

export default Nav;
