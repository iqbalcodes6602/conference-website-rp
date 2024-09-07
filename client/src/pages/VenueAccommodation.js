import React from 'react'
import { Typography } from '@material-tailwind/react'
import PageWrapper from '../components/page-wrapper'
import { HomeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'

function VenueAccommodation() {
    return (
        <>
            <PageWrapper containerClassName='text-center' >
                <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-4 !text-base lg:!text-2xl text-center"
                >
                    Customer Care
                </Typography>
                <Typography
                    variant="h1"
                    color="blue-gray"
                    className="mb-4 !text-3xl lg:!text-5xl text-center"
                >
                    We&apos;re Here to Help
                </Typography>
                <Typography className="font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-500 text-center">
                    Whether it&apos;s a question about our services, a request for
                    technical assistance, or suggestions for improvement, our team is
                    eager to hear from you.
                </Typography>
                <section className="bg-white dark:bg-gray-900">
                    <div className="container px-6 mx-auto">
                        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">

                                {/* venue */}
                                <div>
                                    <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                                        <MapPinIcon className='h-5 w-5' />
                                    </span>

                                    <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Venue</h2>
                                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Department of Industrial Design, National Institute of Technology, Rourkela, Odisha-769008</p>
                                </div>

                                {/* accomodation */}
                                <div className=''>
                                    <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                                        <HomeIcon className='h-5 w-5' />
                                    </span>

                                    <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Accommodation</h2>
                                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 text-justify">Limited institute guest house accommodation is available on first cum first serve basis subjected to nominal charges. Further, hostel accommodation for boys and girls can also be arranged subjected to the availability on very nominal charges.</p>
                                </div>

                                {/* reach us */}
                                <div className='' >
                                    <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                                        <PhoneIcon className='h-5 w-5' />
                                    </span>

                                    <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Reach Us</h2>
                                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 text-justify">The city of Rourkela is a bustling industrial town, cosmopolitan by nature and is well connected to all parts of the country by road and rail. It is en-route Howrah-Mumbai main line of South-Eastern Railway. Nesting amidst greenery on all sides, NIT campus is approximately 7km from Rourkela railway station. The nearest airports are Jharsiguda, Ranchi, Kolkata and Bhubaneswar, which are well connected by trains.</p>
                                </div>
                            </div>

                            <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
                                <iframe width="100%" height="100%" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=National%20Institute%20of%20Technology,%20Sector%201,%20Rourkela,%20Odisha&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"></iframe>
                            </div>
                        </div>
                    </div>
                </section>
            </PageWrapper>
        </>
    )
}

export default VenueAccommodation