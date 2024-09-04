// Set up nodemailer transport
const nodemailer = require('nodemailer');
const User = require('../models/User');
const Submission = require('../models/Submission');

// get all admins
const getAllAdminEmails = async () => {
    const admins = await User.find({ role: 'admin' });
    const adminEmails = admins.map(admin => admin.email).join(',');
    return adminEmails;
}


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.SENDER_EMAIL, // Your email
        pass: process.env.SENDER_EMAIL_PASSWORD, // Your email password
    },
});

// verify email
const sendAccountVerificationMail = async (email, otp) => {
    await transporter.sendMail({
        to: email,
        subject: 'Verify your email',
        text: `Your OTP for verification is ${otp}`,
    });
}

// new submission added - email to all admins
const sendToAdminsNewSubmission = async (submission) => {
    const allAdminEmails = await getAllAdminEmails();
    console.log(allAdminEmails, typeof allAdminEmails)
    await transporter.sendMail({
        to: allAdminEmails,
        subject: 'New Submission',
        html: `
                <h4>A new submission has been added. Details are below:</h4>
                <table border="1" cellPadding="10" cellSpacing="0">
                    <tbody>
                        <tr>
                            <th>Field</th>
                            <th>Value</th>
                        </tr>
                        <tr>
                            <td>ID</td>
                            <td>${submission._id.toString()}</td>
                        </tr>
                        <tr>
                            <td>Filename</td>
                            <td>${submission.filename}</td>
                        </tr>
                        <tr>
                            <td>User ID</td>
                            <td>${submission.userId.toString()}</td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>${submission.name}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>${submission.email}</td>
                        </tr>
                        <tr>
                            <td>Status</td>
                            <td>${submission.status}</td>
                        </tr>
                        <tr>
                            <td>Reviewer</td>
                            <td>${submission.reviewer === null ? 'None' : submission.reviewer}</td>
                        </tr>
                        <tr>
                            <td>Action</td>
                            <td>${submission.action}</td>
                        </tr>
                        <tr>
                            <td>Members</td>
                            <td>
                                <ul>
                                    ${submission.members.map(member => `
                                        <li>
                                            Name: ${member.name}, Email: ${member.email}
                                        </li>
                                    `).join('')}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            `,
    });
}


// a new submission has been added: mail to all mambers
const sendToMembersNewSubmission = async (submission) => {
    const allMembersEmail = submission.members.map(member => member.email).join(',');
    console.log(allMembersEmail, typeof allMembersEmail)
    await transporter.sendMail({
        to: allMembersEmail,
        subject: 'New Submission',
        html: `
                <h4>Your team leader has added a new submission. Check details below</h4>
                <table border="1" cellPadding="10" cellSpacing="0">
                    <tbody>
                        <tr>
                            <th>Field</th>
                            <th>Value</th>
                        </tr>
                        <tr>
                            <td>ID</td>
                            <td>${submission._id.toString()}</td>
                        </tr>
                        <tr>
                            <td>Filename</td>
                            <td>${submission.filename}</td>
                        </tr>
                        <tr>
                            <td>User ID</td>
                            <td>${submission.userId.toString()}</td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>${submission.name}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>${submission.email}</td>
                        </tr>
                        <tr>
                            <td>Status</td>
                            <td>${submission.status}</td>
                        </tr>
                        <tr>
                            <td>Reviewer</td>
                            <td>${submission.reviewer === null ? 'None' : submission.reviewer}</td>
                        </tr>
                        <tr>
                            <td>Action</td>
                            <td>${submission.action}</td>
                        </tr>
                        <tr>
                            <td>Members</td>
                            <td>
                                <ul>
                                    ${submission.members.map(member => `
                                        <li>
                                            Name: ${member.name}, Email: ${member.email}
                                        </li>
                                    `).join('')}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            `,
    });
}


// mail to reviewer a new submission has been assigned
const sendToReviewerNewSubmissionAssigned = async (submission, reviewerId) => {
    const reviewer = await User.findById(reviewerId);
    console.log(reviewer, typeof reviewer)
    await transporter.sendMail({
        to: reviewer.email,
        subject: 'New Submission Assigned',
        html: `
                <h4>You have been assigned a new submission. Check details below</h4>
                <table border="1" cellPadding="10" cellSpacing="0">
                    <tbody>
                        <tr>
                            <th>Field</th>
                            <th>Value</th>
                        </tr>
                        <tr>
                            <td>ID</td>
                            <td>${submission._id.toString()}</td>
                        </tr>
                        <tr>
                            <td>Filename</td>
                            <td>${submission.filename}</td>
                        </tr>
                        <tr>
                            <td>User ID</td>
                            <td>${submission.userId.toString()}</td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>${submission.name}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>${submission.email}</td>
                        </tr>
                        <tr>
                            <td>Status</td>
                            <td>${submission.status}</td>
                        </tr>
                        <tr>
                            <td>Reviewer</td>
                            <td>${submission.reviewer === null ? 'None' : submission.reviewer}</td>
                        </tr>
                        <tr>
                            <td>Action</td>
                            <td>${submission.action}</td>
                        </tr>
                        <tr>
                            <td>Members</td>
                            <td>
                                <ul>
                                    ${submission.members.map(member => `
                                        <li>
                                            Name: ${member.name}, Email: ${member.email}
                                        </li>
                                    `).join('')}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            `,
    });
}


// mail to user and members: submission has been assigned to reviewer and is in review
const sendToUserAndMembersSubmissionInReview = async (submission) => {
    // const submission = await Submission.findById(submissionId)
    console.log(submission)

    const allMembersEmail = submission.members.map(member => member.email).join(',');
    const allEmails = submission.email + ',' + allMembersEmail
    console.log(allEmails, typeof allEmails)
    
    
    await transporter.sendMail({
        to: allEmails,
        subject: 'Submission Status Update.',
        html: `
                <h4>Your submission has been assigned to a reviewer and is in review. Check details below</h4>
                <table border="1" cellPadding="10" cellSpacing="0">
                    <tbody>
                        <tr>
                            <th>Field</th>
                            <th>Value</th>
                        </tr>
                        <tr>
                            <td>ID</td>
                            <td>${submission._id.toString()}</td>
                        </tr>
                        <tr>
                            <td>Filename</td>
                            <td>${submission.filename}</td>
                        </tr>
                        <tr>
                            <td>User ID</td>
                            <td>${submission.userId.toString()}</td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>${submission.name}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>${submission.email}</td>
                        </tr>
                        <tr>
                            <td>Status</td>
                            <td>${submission.status}</td>
                        </tr>
                        <tr>
                            <td>Reviewer</td>
                            <td>${submission.reviewer === null ? 'None' : submission.reviewer}</td>
                        </tr>
                        <tr>
                            <td>Action</td>
                            <td>${submission.action}</td>
                        </tr>
                        <tr>
                            <td>Members</td>
                            <td>
                                <ul>
                                    ${submission.members.map(member => `
                                        <li>
                                            Name: ${member.name}, Email: ${member.email}
                                        </li>
                                    `).join('')}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            `,
    });
}

module.exports = {
    sendAccountVerificationMail,
    sendToAdminsNewSubmission,
    sendToMembersNewSubmission,
    sendToReviewerNewSubmissionAssigned,
    sendToUserAndMembersSubmissionInReview
};