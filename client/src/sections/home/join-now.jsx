import { Button, Typography } from '@material-tailwind/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

function JoinNow() {
    return (
        <div className="flex !w-full py-10 mb-5 md:mb-20 flex-col justify-center !items-center bg-gray-900 max-w-6xl mx-auto rounded-2xl p-5 ">
            <Typography
                className="text-2xl md:text-3xl text-center font-bold "
                color="white"
            >
                Join IPDIMS 2024.
            </Typography>
            <Typography
                color="white"
                className=" md:w-7/12 text-center my-3 !text-base"
            >
                We will have a great lineup of speakers, workshops, and networking opportunities.
            </Typography>
            <div className="flex w-full md:w-fit gap-3 mt-2 flex-col md:flex-row">
                <NavLink to='/registration' >
                    <Button color="white" size="md">
                        Register Now
                    </Button>
                </NavLink>
            </div>
        </div>
    )
}

export default JoinNow