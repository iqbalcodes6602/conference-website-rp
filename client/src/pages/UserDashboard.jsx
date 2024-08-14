import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Updated import
import { UserContext } from '../UserContext';
import Header from '../components/header';
import Footer from '../components/footer';
import { Typography } from '@material-tailwind/react';

const catergories = [
    {
        title: 'Marketing',
        description: 'Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.',
    },
    {
        title: 'Legal',
        description: 'Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.',
    },
    {
        title: 'Business Automation',
        description: 'Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started.',
    },
    {
        title: 'Finance',
        description: 'Audit-proof software built for critical financial operations like month-end close and quarterly budgeting.',
    },
    {
        title: 'Enterprise Design',
        description: 'Craft beautiful, delightful experiences for both marketing and product with real cross-company collaboration.',
    },
    {
        title: 'Operations',
        description: 'Keep your company’s lights on with customizable, iterative, and structured workflows built for all efficient teams and individual.',
    },
];


function UserDashboard() {
    const { user, login, logout, isUserValid } = useContext(UserContext);
    const navigate = useNavigate();  // Updated hook

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token || !isUserValid(token)) {
            navigate('/registration');  // Updated method
            logout();
        }
    }, [navigate, isUserValid, logout]);

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
                        My Dashboard
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
                        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 text-left">
                            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                                {
                                    catergories.map((category, index) => (
                                        <div key={index}>
                                            <div className='flex justify-between'>
                                                <h3 className="mb-2 text-xl font-bold dark:text-white">{category.title}</h3>
                                                <svg
                                                    className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                            <p className="text-gray-500 dark:text-gray-400">
                                                {category.description}
                                            </p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </section>

                </div>
            </section>
            <Footer />
        </>
    );
}

export default UserDashboard;
