import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import { Button, Typography } from '@material-tailwind/react'
import React from 'react'

function ViewAllUserSubmissions({ handleOptionDeSelect }) {
  return (
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
        <div>
          <Typography
            variant="h3"
            color="blue-gray">
            View All User Submissions
          </Typography>
        </div>
      </div>
      <Typography
      // className="font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-500"
      >
       all reviewers
      </Typography>
    </>

  )
}

export default ViewAllUserSubmissions