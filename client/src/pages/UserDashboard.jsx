import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Updated import
import { UserContext } from '../UserContext';
import Header from '../components/header';
import Footer from '../components/footer';
import { Typography } from '@material-tailwind/react';
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
                </div>
            </section>
            <Footer />
        </>
    );
}

export default UserDashboard;
