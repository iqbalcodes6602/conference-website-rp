import { Typography } from "@material-tailwind/react";
import React from "react";
import Star from "../utils/Star";
import musa from "../images/musa.jpeg";
import sharon from "../images/sharon.jpeg";

const Testimonial = () => {
	return (
		<div className='w-full  py-16 lg:px-8 px-4 bg-gray-50'>
			<div className='mb-8'>
				<Typography className='text-2xl font-extrabold font-poppins mb-3'>
					Satisfied Users
				</Typography>
				<Typography className='font-poppins text-sm'>
					Meetup has helped me build me healthy relationships with great people
					all around the world. I wished I had found you earlier...
				</Typography>
			</div>
			<div className='w-full flex flex-col lg:flex-row items-center justify-between lg:space-x-5 space-y-8'>
				<div>
					<Star />
					<Typography className='font-semibold font-poppins mt-4'>
						Best matchmaking app so far
					</Typography>
					<Typography className='font-sm opacity-50 font-poppins mb-2'>
						Meetup has helped me build me healthy relationships with great
						people all around the world. I wished I had found you earlier...
					</Typography>
					<div className='flex items-center'>
						<img
							src={musa}
							alt='Mustapha Musa'
							className='w-10 h-10 rounded-full mr-2'
						/>
						<Typography className='font-poppins opacity-70 font-semibold'>
							Musa Mustapha
						</Typography>
					</div>
				</div>
				<div>
					<Star />
					<Typography className='font-semibold font-poppins mt-4'>
						Great UI and customer support
					</Typography>
					<Typography className='font-sm opacity-50 font-poppins mb-2'>
						Meetup has helped me build me healthy relationships with great
						people all around the world. I wished I had found you earlier...
					</Typography>
					<div className='flex items-center'>
						<img
							src={sharon}
							alt='Sharon Kelly'
							className='w-10 h-10 rounded-full mr-2'
						/>
						<Typography className='font-poppins opacity-70 font-semibold'>
							Sharon Kelly
						</Typography>
					</div>
				</div>
				<div>
					<Star />
					<Typography className='font-semibold font-poppins mt-4'>
						Excellent user experience
					</Typography>
					<Typography className='font-sm opacity-50 font-poppins mb-2'>
						Meetup has helped me build me healthy relationships with great
						people all around the world. I wished I had found you earlier...
					</Typography>
					<div className='flex items-center'>
						<img
							src={musa}
							alt='Dave Tuchel'
							className='w-10 h-10 rounded-full mr-2'
						/>
						<Typography className='font-poppins opacity-70 font-semibold'>
							Dave Tuchel
						</Typography>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
