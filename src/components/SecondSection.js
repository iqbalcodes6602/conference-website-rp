import { Button, Typography } from "@material-tailwind/react";
import React from "react";

const SecondSection = () => {
	return (
		<div className='w-full bg-white lg:px-8 px-4 flex lg:flex-row flex-col lg:items-center mt-10'>
			<div className='lg:pr-6 lg:w-1/2 w-full lg:mr-16'>
				<Typography className='font-bold text-lg text-purple-600 mb-4 font-poppins'>
					Meet your match
				</Typography>
				<Typography className='font-extrabold text-2xl mb-4 font-poppins'>
					Trusted by over 10 million users worldwide
				</Typography>
				<div className='mb-8 lg:mb-auto'>
					<Typography className='lg:text-lg text-md font-poppins mb-6'>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
						quae ab illo inventore veritatis et quasi architecto beatae vitae
						dicta sunt explicabo.
					</Typography>
					<Button size='lg' color='purple'>
						Find your match
					</Button>
				</div>
			</div>

			<div className='lg:w-1/2 w-full'>
				<div className='w-full flex lg:flex-row flex-col items-center justify-between lg:mb-12 lg:space-x-5 '>
					<div className='lg:w-1/2 w-full mb-6'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
							className='w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75'
							/>
						</svg>

						<Typography className='text-2xl mb-2 font-extrabold font-poppins'>
							99.99%
						</Typography>
						<Typography className='text-md font-poppins'>
							Enjoy using meetup and have created healthy relationships
						</Typography>
					</div>
					<div className='lg:w-1/2 w-full mb-6'>
						<svg
							className='w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path d='M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z'></path>
						</svg>
						<Typography className='text-2xl mb-2 font-extrabold font-poppins'>
							10M+ Users
						</Typography>
						<Typography className='text-md font-poppins'>
							Trusted by over 10 milion users around the world
						</Typography>
					</div>
				</div>

				<div className='w-full flex lg:flex-row flex-col items-center justify-between lg:space-x-5'>
					<div className='lg:w-1/2 w-full mb-6'>
						<svg
							className='w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fillRule='evenodd'
								d='M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z'
								clipRule='evenodd'
							></path>
						</svg>
						<Typography className='text-2xl mb-2 font-extrabold font-poppins'>
							15+ countries
						</Typography>
						<Typography className='text-md font-poppins'>
							Have created good, healthy, and interactive business and cordial
							relationships.
						</Typography>
					</div>
					<div className='lg:w-1/2 w-full'>
						<svg
							className='w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path d='M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z'></path>
						</svg>
						<Typography className='text-2xl mb-2 font-extrabold font-poppins'>
							3+ Million
						</Typography>
						<Typography className='text-md font-poppins'>
							Active users per day ready to network and mingle.
						</Typography>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SecondSection;
