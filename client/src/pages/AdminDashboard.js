import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Updated import
import { UserContext } from '../UserContext';
import { Typography } from '@material-tailwind/react';
import OptionsCard from '../sections/adminDashboard/components/optionscard';
import PageWrapper from '../components/page-wrapper';

const options = [
    {
        title: 'View All Users',
        description: 'Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.',
        href: '/admin/dashboard/view-all-users',
    },
    {
        title: 'View All User Submissions',
        description: 'Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.',
        href: '/admin/dashboard/view-all-user-submissions',
    },
    {
        title: 'Manage Announcements',
        description: 'Get the insights you need to make smarter marketing decisions and grow your organization with confidence.',
        href: '/admin/dashboard/manage-announcements',
    }
];

function AdminDashboard() {
    const navigate = useNavigate();  // Updated hook
    const { user, login, logout, isUserValid } = useContext(UserContext);

    useEffect(() => {
        try {
            if (!isUserValid()) {
                logout();
                navigate('/registration');
            } else {
                if (user?.role !== 'admin') {
                    navigate('/user/dashboard');
                }
            }
        } catch (error) {
            // console.log("line 55",error);
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
                    Admin Dashboard
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

export default AdminDashboard;