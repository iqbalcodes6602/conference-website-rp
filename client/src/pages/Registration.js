import React, { useContext, useEffect } from 'react'
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from '@material-tailwind/react'
import SignIn from '../sections/registration/signin'
import SignUp from '../sections/registration/signup'
import LeftImage from '../sections/registration/leftimage'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../UserContext'
import PageWrapper from '../components/page-wrapper'

function Registration() {
    const navigate = useNavigate();
    const { user, login, logout, isUserValid } = useContext(UserContext);

    useEffect(() => {
        try {
            if (isUserValid()) {
                navigate('/home');
            }
        } catch (error) {
            logout();
        }
    }, [navigate, isUserValid, logout]);
    return (
        <>
            <PageWrapper>
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
            </PageWrapper>
        </>
    )
}

export default Registration