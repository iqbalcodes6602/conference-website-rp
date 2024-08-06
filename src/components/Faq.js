import React, { useState } from "react";
import {
	Typography,
	Accordion,
	AccordionHeader,
	AccordionBody,
} from "@material-tailwind/react";

const Faq = () => {
	const [open, setOpen] = useState(1);

	const handleOpen = (value) => {
		setOpen(open === value ? 0 : value);
	};
	const faqs = [
		{
			id: 1,
			heading: "How does Meetup works?",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
		},
		{
			id: 2,
			heading: "Can I use Meetup as a dating app?",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
		},
		{
			id: 3,
			heading: "Is Meetup safe and secure?",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
		},
	];
	return (
		<div className='faq w-full min-h-[50vh] py-16 px-4'>
			<Typography className='text-3xl text-center font-extrabold mb-8 font-poppins'>
				Frequently asked questions
			</Typography>

			<div className='lg:w-[60%] w-full mx-auto'>
				{faqs.map((faq) => (
					<Accordion open={open === faq.id} key={faq.id}>
						<AccordionHeader
							onClick={() => handleOpen(faq.id)}
							className='font-poppins text-md'
						>
							{faq.heading}
						</AccordionHeader>
						<AccordionBody className='font-poppins'>
							{faq.content}
						</AccordionBody>
					</Accordion>
				))}
			</div>
		</div>
	);
};

export default Faq;
