import React from "react";

import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import Footer from "./sections/footer";
import Header from "./sections/header";
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Contact = () => {
	const defaultProps = {
		center: {
			lat: 10.99835602,
			lng: 77.01502627
		},
		zoom: 11
	};
	return (
		<div>
			<Header />
			<section className="px-8 py-8 lg:py-16 mt-10">
				<div className="container mx-auto text-center">
					<Typography
						variant="h5"
						color="blue-gray"
						className="mb-4 !text-base lg:!text-2xl"
					>
						Customer Care
					</Typography>
					<Typography
						variant="h1"
						color="blue-gray"
						className="mb-4 !text-3xl lg:!text-5xl"
					>
						We&apos;re Here to Help
					</Typography>
					<Typography className="mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-500">
						Whether it&apos;s a question about our services, a request for
						technical assistance, or suggestions for improvement, our team is
						eager to hear from you.
					</Typography>
					<div className="grid grid-cols-1 gap-x-6 gap-y-6 lg:grid-cols-2 justify-items-end">
						{/* <img
							src="/image/map.svg"
							alt="map"
							className="w-full h-full lg:max-h-[510px]"
						/> */}
						<GoogleMapReact
							bootstrapURLKeys={{ key: "" }}
							defaultCenter={defaultProps.center}
							defaultZoom={defaultProps.zoom}
						>
							<AnyReactComponent
								lat={59.955413}
								lng={30.337844}
								text="My Marker"
							/>
						</GoogleMapReact>
						<form
							action="#"
							className="flex flex-col gap-4 lg:max-w-lg"
						>
							<Typography
								variant="small"
								className="text-left !font-semibold !text-gray-600"
							>
								Select Options for Business Engagement
							</Typography>
							<div className="grid grid-cols-2 gap-4">
								<div>
									<Typography
										variant="small"
										className="mb-2 text-left font-medium !text-gray-900"
									>
										First Name
									</Typography>
									<Input
										color="gray"
										size="lg"
										placeholder="First Name"
										name="first-name"
										className="focus:border-t-gray-900"
										containerProps={{
											className: "min-w-full",
										}}
										labelProps={{
											className: "hidden",
										}}
									/>
								</div>
								<div>
									<Typography
										variant="small"
										className="mb-2 text-left font-medium !text-gray-900"
									>
										Last Name
									</Typography>
									<Input
										color="gray"
										size="lg"
										placeholder="Last Name"
										name="last-name"
										className="focus:border-t-gray-900"
										containerProps={{
											className: "!min-w-full",
										}}
										labelProps={{
											className: "hidden",
										}}
									/>
								</div>
							</div>
							<div>
								<Typography
									variant="small"
									className="mb-2 text-left font-medium !text-gray-900"
								>
									Your Email
								</Typography>
								<Input
									color="gray"
									size="lg"
									placeholder="name@email.com"
									name="email"
									className="focus:border-t-gray-900"
									containerProps={{
										className: "!min-w-full",
									}}
									labelProps={{
										className: "hidden",
									}}
								/>
							</div>
							<div>
								<Typography
									variant="small"
									className="mb-2 text-left font-medium !text-gray-900"
								>
									Your Message
								</Typography>
								<Textarea
									rows={6}
									color="gray"
									placeholder="Message"
									name="message"
									className="focus:border-t-gray-900"
									containerProps={{
										className: "!min-w-full",
									}}
									labelProps={{
										className: "hidden",
									}}
								/>
							</div>
							<Button className="w-full" color="black">
								Send message
							</Button>
						</form>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default Contact;
