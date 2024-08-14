import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { Button, Typography } from '@material-tailwind/react';
import React from 'react'

function SelectedOptionSection({ selectedOption, handleOptionDeSelect }) {
    return (
        <div>
            <div className='flex justify-between mb-5'>
                <div>
                    <Button
                        variant='text'
                        className='flex items-center gap-2'
                        onClick={() => {handleOptionDeSelect()}}>
                        <ArrowLeftIcon className='h-4 w-4' /> Go Back
                    </Button>
                </div>
                <div>
                    <Typography
                        variant="h3"
                        color="blue-gray">
                        {selectedOption.title}
                    </Typography>
                </div>
            </div>
            <Typography
            // className="font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-500"
            >
                {selectedOption.description}
                {selectedOption.description}
                {selectedOption.description}
            </Typography>
        </div>
    )
}

export default SelectedOptionSection