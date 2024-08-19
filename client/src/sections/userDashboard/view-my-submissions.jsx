import React from 'react'
import OptionsHeader from '../../components/options-header';
import PageWrapper from '../../components/page-wrapper';
import ViewMySubmissionsTable from './components/view-my-submissions-table';

function ViewMySubmissions() {
    return (
        <>
            <PageWrapper>
                <OptionsHeader href='/user/dashboard' title='View My Submissions' />
                <ViewMySubmissionsTable />
            </PageWrapper>
        </>
    )
}



export default ViewMySubmissions