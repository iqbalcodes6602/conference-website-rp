import React from 'react'
import Header from './sections/header'
import Footer from './sections/footer'
import { Typography } from '@material-tailwind/react'

function VenueAccommodation() {
    return (
        <>
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
                    <Typography className="font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-500">
                        Whether it&apos;s a question about our services, a request for
                        technical assistance, or suggestions for improvement, our team is
                        eager to hear from you.
                    </Typography>
                    <section className="bg-white dark:bg-gray-900">
                        <div className="container px-6 mx-auto">
                            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">
                                    <div>
                                        <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                            </svg>
                                        </span>

                                        <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Email</h2>
                                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Our friendly team is here to help.</p>
                                        <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">hello@merakiui.com</p>
                                    </div>

                                    <div>
                                        <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                            </svg>
                                        </span>

                                        <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Office</h2>
                                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Come say hello at our office HQ.</p>
                                        <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">100 Smith Street Collingwood VIC 3066 AU</p>
                                    </div>

                                    <div>
                                        <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                            </svg>
                                        </span>

                                        <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Phone</h2>
                                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Mon-Fri from 8am to 5pm.</p>
                                        <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">+1 (555) 000-0000</p>
                                    </div>
                                </div>

                                <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
                                    <iframe width="100%" height="100%" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=National%20Institute%20of%20Technology,%20Sector%201,%20Rourkela,%20Odisha&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"></iframe>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default VenueAccommodation