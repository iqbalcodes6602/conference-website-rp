import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import {
    Card,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import PageWrapper from '../components/page-wrapper';


function Submission() {
    return (
        <>
            <PageWrapper>
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
                    Submission
                </Typography>
                <Typography className="mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-500 text-center">
                    Whether it&apos;s a question about our services, a request for
                    technical assistance, or suggestions for improvement, our team is
                    eager to hear from you.
                </Typography>
                {/* <div className="w-[32rem] text-left"> */}
                <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
                    <Card shadow={false}>
                        <CardBody className="h-full p-5 flex flex-col items-center rounded-2xl bg-blue-gray-300 ">
                            <Typography variant="h6" className="mb-4 text-center" color="white">

                            </Typography>
                            <Typography variant="h4" className="text-center" color="white">
                                Submission Guidelines
                            </Typography>
                            <Typography
                                color="white"
                                className="mt-2 mb-10 text-base w-full lg:w-10/12 text-justify font-normal"
                            >
                                Prospective authors from India are invited to submit manuscripts reporting original, unpublished research and recent developments in the topics related to the conference. Submissions must include title, abstract, author affiliation with the email address and keywords as per template which is available in the website. The paper should not contain page numbers or any special headers or footers. Regular papers should present novel perspectives within the general scope of the conference. Short papers (Work-in-Progress) are an opportunity to present preliminary or interim results. The paper length should be in 6–8 pages Literature reviews/survey papers will only be considered if they present a new perspective or benefit the field. To be published, such papers must go beyond a review of the literature to define the field in a new way or highlight exciting new technologies or areas of research. All submitted papers will be subjected to a “similarity test” by Turnitin Software. Papers achieving a minimal similarity index i.e. less than 15% will be examined, and those are deemed unacceptable will be rejected/withdrawn without a formal review.
                            </Typography>
                        </CardBody>
                    </Card>
                    <Card shadow={false}>
                        <CardBody className="h-full p-5 flex flex-col items-center rounded-2xl bg-blue-gray-300">
                            <Typography variant="h6" className="mb-4 text-center" color="white">

                            </Typography>
                            <Typography variant="h4" className="text-center" color="white">
                                Policy on Plagiarism
                            </Typography>
                            <Typography
                                color="white"
                                className="mt-2 mb-10 text-base w-full lg:w-10/12 text-justify font-normal"
                            >
                                <ul>
                                    <li>Authors are requested to kindly refrain from plagiarism in any form. Authors should submit their original and unpublished research work not under consideration for publication everywhere.</li>
                                    <li>Manuscript found to be plagiarised during any stage of review shall be rejected</li>
                                    <li>As per the copyright transfer agreement, authors are deemed to be individually or collectively responsible for the content of the manuscript published by them.</li>

                                </ul>
                            </Typography>
                        </CardBody>
                    </Card>
                </div>
                {/* </div> */}
            </PageWrapper>
        </>
    )
}

export default Submission