import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Updated import
import { UserContext } from '../UserContext';
import { Typography } from '@material-tailwind/react';
import OptionsCard from '../sections/userDashboard/components/optionscard';
import PageWrapper from '../components/page-wrapper';

const options = [
    {
        title: 'Add New Submission',
        description: 'Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.',
        href: '/user/dashboard/add-new-submission',
    },
    {
        title: 'View My Submissions',
        description: 'Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.',
        href: '/user/dashboard/view-my-submissions',
    },
    {
        title: 'Business Automation',
        description: 'Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started.',
        href: '/business-automation',
    },
    {
        title: 'Finance',
        description: 'Audit-proof software built for critical financial operations like month-end close and quarterly budgeting.',
        href: '/finance',
    },
    {
        title: 'Enterprise Design',
        description: 'Craft beautiful, delightful experiences for both marketing and product with real cross-company collaboration.',
        href: '/enterprise-design',
    },
    {
        title: 'Operations',
        description: 'Keep your company’s lights on with customizable, iterative, and structured workflows built for all efficient teams and individual.',
        href: '/operations',
    },
];

function UserDashboard() {
    const navigate = useNavigate();  // Updated hook
    const { user, login, logout, isUserValid } = useContext(UserContext);

    useEffect(() => {
        try {
            if (!isUserValid()) {
                logout();
                navigate('/registration');
            }
        } catch (error) {
            logout();
        }
    }, []);

    return (
        <>
            <PageWrapper>
                <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-4 !text-base lg:!text-2xl text-center"
                >
                    My Dashboard
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
                    <div className="px-4 mx-auto max-w-screen-xl lg:px-6 text-left">
                        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:space-y-0">
                            {
                                options.map((category, index) => (
                                    <OptionsCard key={index} category={category} />
                                ))
                            }
                        </div>
                    </div>
                </section>
            </PageWrapper>
        </>
    );
}

export default UserDashboard;