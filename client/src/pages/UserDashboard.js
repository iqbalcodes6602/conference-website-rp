import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Updated import
import { UserContext } from '../UserContext';
import Header from '../components/header';
import Footer from '../components/footer';
import { Typography } from '@material-tailwind/react';
import OptionsCard from '../sections/userDashboard/optionscard';
import SelectedOptionSection from '../sections/userDashboard/selectedOptionSection';

const options = [
    {
        title: 'Add New Submission',
        description: 'Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.',
    },
    {
        title: 'View All Submissions',
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
    const navigate = useNavigate();  // Updated hook
    const { user, login, logout, isUserValid } = useContext(UserContext);

    const [selectedOption, setSelectedOption] = React.useState(null);
    const [showOptions, setShowOptions] = React.useState(true);

    useEffect(() => {
        try {
			if (!isUserValid()) {
				logout();
                navigate('/registration');
			}
		} catch (error) {
			logout();
		}
    }, [navigate, isUserValid, logout]);

    const handleOptionSelect = (category) => {
        setSelectedOption(category);
        setShowOptions(false);
        console.log(category);
        console.log(selectedOption);
    }

    const handleOptionDeSelect = () => {
        setSelectedOption(null);
        setShowOptions(true);
    }

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
                        <div className="px-4 mx-auto max-w-screen-xl lg:px-6 text-left">
                            {showOptions ? (
                                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:space-y-0">
                                    {
                                        options.map((category, index) => (
                                            <div onClick={() => handleOptionSelect(category)} >
                                                <OptionsCard key={index} category={category} />
                                            </div>
                                        ))
                                    }
                                </div>
                            ) : (
                                <SelectedOptionSection selectedOption={selectedOption} handleOptionDeSelect={handleOptionDeSelect} />
                            )}
                        </div>
                    </section>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default UserDashboard;