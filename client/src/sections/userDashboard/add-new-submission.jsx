import React from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import { Button, Typography } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import AddNewSubmissionForm from './components/add-new-submission-form';

function AddNewSubmission() {
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <section className="px-8 py-8 lg:py-16 mt-10">
                <div className="container mx-auto">
                    <div className='flex justify-between mb-5'>
                        <div>
                            <Button
                                variant='text'
                                className='flex items-center gap-2'
                                onClick={() => {
                                    navigate('/user/dashboard');
                                }}>
                                <ArrowLeftIcon className='h-4 w-4' /> Go Back
                            </Button>
                        </div>
                        <div>
                            <Typography
                                variant="h2"
                                color="blue-gray">
                                Add New Submission
                            </Typography>
                        </div>
                    </div>
                    <AddNewSubmissionForm />
                </div>
            </section>
            <Footer />
        </>
    )
}

export default AddNewSubmission