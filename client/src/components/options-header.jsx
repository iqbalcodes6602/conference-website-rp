import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { Button, Typography } from '@material-tailwind/react';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function OptionsHeader({href, title}) {
    const navigate = useNavigate();

    return (
        <div className='flex justify-between mb-5'>
            <div>
                <Button
                    variant='text'
                    className='flex items-center gap-2'
                    onClick={() => {
                        navigate(`${href}`);
                    }}>
                    <ArrowLeftIcon className='h-4 w-4' /> Go Back
                </Button>
            </div>
            <div>
                <Typography
                    variant="h2"
                    color="blue-gray">
                    {title}
                </Typography>
            </div>
        </div>
    )
}

export default OptionsHeader