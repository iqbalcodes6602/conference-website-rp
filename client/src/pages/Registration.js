import React, { useContext, useEffect } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from '@material-tailwind/react'
import SignIn from '../sections/registration/signin'
import SignUp from '../sections/registration/signup'
import LeftImage from '../sections/registration/leftimage'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../UserContext'

function Registration() {
    const navigate = useNavigate();
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
    }, [navigate, isUserValid, logout]);
    return (
        <>
            <Header />
            <section className="px-8 py-8 lg:py-16 mt-10">
                <div className="container mx-auto text-center">
                    <section className="bg-white">
                        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                            <LeftImage />
                            <main
                                className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                            >
                                <div className="max-w-xl lg:max-w-3xl">
                                    <Tabs value="signin">
                                        <TabsHeader>
                                            <Tab value="signin">
                                                Sign In
                                            </Tab>
                                            <Tab value="signup">
                                                Sign Up
                                            </Tab>
                                        </TabsHeader>
                                        <TabsBody
                                            animate={{
                                                initial: { y: 250 },
                                                mount: { y: 0 },
                                                unmount: { y: 250 },
                                            }}
                                        >
                                            <TabPanel value="signin" >
                                                <SignIn />
                                            </TabPanel>
                                            <TabPanel value="signup">
                                                <SignUp />
                                            </TabPanel>
                                        </TabsBody>
                                    </Tabs>
                                </div>
                            </main>
                        </div>
                    </section>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Registration