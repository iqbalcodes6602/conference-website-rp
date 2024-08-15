import React from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { Button, Typography } from '@material-tailwind/react';
import ViewAllUsers from './components/view-all-users';
import ViewAllUserSubmissions from './components/view-all-users-submissions';

const componentMap = {
    'View All Users': ViewAllUsers,
    'View All User Submissions': ViewAllUserSubmissions,
};

function SelectedOptionSection({ selectedOption, handleOptionDeSelect }) {
    const SelectedComponent = componentMap[selectedOption.title] || null;

    return (
        <div>
            {SelectedComponent ? (
                <SelectedComponent selectedOption={selectedOption} handleOptionDeSelect={handleOptionDeSelect} />
            ) : (
                <>
                    <div className='flex justify-between mb-5'>
                        <div>
                            <Button
                                variant='text'
                                className='flex items-center gap-2'
                                onClick={() => { handleOptionDeSelect() }}>
                                <ArrowLeftIcon className='h-4 w-4' /> Go Back
                            </Button>
                        </div>
                    </div>
                    <Typography
                    // className="font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-500"
                    >
                        <div>Select an option to view details</div>
                    </Typography>
                </>
            )}
        </div>
    );
}

export default SelectedOptionSection;