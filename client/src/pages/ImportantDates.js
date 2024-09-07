import React from 'react'
import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
} from "@material-tailwind/react";
import { HomeIcon, BellIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import PageWrapper from '../components/page-wrapper';


// Last date for submission of full length paper: 15 – 09 - 2024
// Author notification: 15 - 10 – 2024
// Submission of Revised Paper: 30 - 10 - 2024
// Early bird Registration: Till 20 - 11 - 202
// Late Registration: 21 to 27 – 11 - 2024
// Conference Dates: 04 & 05 December 2024

const importantDates = [
    {
        date: '15 September, 2024',
        description: 'Last date for submission of full length paper',
    },
    {
        date: '15 October, 2024',
        description: 'Author notification',
    },
    {
        date: '30 October, 2024',
        description: 'Submission of Revised Paper',
    },
    {
        date: '20 November, 2024',
        description: 'Early bird Registration',
    },
    {
        date: '21 - 27 November, 2024',
        description: 'Late Registration',
    },
    {
        date: '04 & 05 December, 2024',
        description: 'Conference Dates',
    }
]

function ImportantDates() {

    return (
        <>
            <PageWrapper>
                <div className='flex flex-col items-center'>
                    <Typography
                        variant="h5"
                        color="blue-gray"
                        className="mb-4 !text-base lg:!text-2xl text-center"
                    >
                        Customer Care
                    </Typography>
                    <Typography
                        variant="h1"
                        color="blue-gray"
                        className="mb-4 !text-3xl lg:!text-5xl text-center"
                    >
                        Important Dates
                    </Typography>
                    <Typography className="mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-500 text-center">
                        Whether it&apos;s a question about our services, a request for
                        technical assistance, or suggestions for improvement, our team is
                        eager to hear from you.
                    </Typography>
                    <div className="w-[32rem] text-left">
                        <Timeline>
                            {importantDates.map((date, index) => (
                                <TimelineItem key={index}>
                                    <TimelineConnector />
                                    <TimelineHeader>
                                        <TimelineIcon className="p-2">
                                            <HomeIcon className="h-4 w-4" />
                                        </TimelineIcon>
                                        <Typography variant="h5" color="blue-gray">
                                            {date.date}
                                        </Typography>
                                    </TimelineHeader>
                                    <TimelineBody className="pb-8">
                                        <Typography color="gray" className="font-normal text-gray-600">
                                            {date.description}
                                        </Typography>
                                    </TimelineBody>
                                </TimelineItem>
                            ))}
                        </Timeline>
                    </div>
                </div>
            </PageWrapper>
        </>
    )
}

export default ImportantDates