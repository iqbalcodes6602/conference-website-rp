import React from 'react'
import AddNewSubmissionForm from './components/add-new-submission-form';
import OptionsHeader from '../../components/options-header';
import PageWrapper from '../../components/page-wrapper';

function AddNewSubmission() {

    return (
        <>
            <PageWrapper>
                <OptionsHeader href='/user/dashboard' title='Add New Submission' />
                <AddNewSubmissionForm />
            </PageWrapper>
        </>
    )
}

export default AddNewSubmission