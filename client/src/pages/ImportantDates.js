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
                            <TimelineItem>
                                <TimelineConnector />
                                <TimelineHeader>
                                    <TimelineIcon className="p-2">
                                        <HomeIcon className="h-4 w-4" />
                                    </TimelineIcon>
                                    <Typography variant="h5" color="blue-gray">
                                        Timeline Title Here.
                                    </Typography>
                                </TimelineHeader>
                                <TimelineBody className="pb-8">
                                    <Typography color="gary" className="font-normal text-gray-600">
                                        The key to more success is to have a lot of pillows. Put it this way, it took me
                                        twenty five years to get these plants, twenty five years of blood sweat and tears, and
                                        I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
                                        luv.
                                    </Typography>
                                </TimelineBody>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineConnector />
                                <TimelineHeader>
                                    <TimelineIcon className="p-2">
                                        <BellIcon className="h-4 w-4" />
                                    </TimelineIcon>
                                    <Typography variant="h5" color="blue-gray">
                                        Timeline Title Here.
                                    </Typography>
                                </TimelineHeader>
                                <TimelineBody className="pb-8">
                                    <Typography color="gary" className="font-normal text-gray-600">
                                        The key to more success is to have a lot of pillows. Put it this way, it took me
                                        twenty five years to get these plants, twenty five years of blood sweat and tears, and
                                        I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
                                        luv.
                                    </Typography>
                                </TimelineBody>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineHeader>
                                    <TimelineIcon className="p-2">
                                        <CurrencyDollarIcon className="h-4 w-4" />
                                    </TimelineIcon>
                                    <Typography variant="h5" color="blue-gray">
                                        Timeline Title Here.
                                    </Typography>
                                </TimelineHeader>
                                <TimelineBody>
                                    <Typography color="gary" className="font-normal text-gray-600">
                                        The key to more success is to have a lot of pillows. Put it this way, it took me
                                        twenty five years to get these plants, twenty five years of blood sweat and tears, and
                                        I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
                                        luv.
                                    </Typography>
                                </TimelineBody>
                            </TimelineItem>
                        </Timeline>
                    </div>
                </div>
            </PageWrapper>
        </>
    )
}

export default ImportantDates