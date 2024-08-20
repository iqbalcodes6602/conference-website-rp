import React from 'react'
import OptionsHeader from '../../components/options-header';
import PageWrapper from '../../components/page-wrapper';
import ViewAssignedSubmissionsTable from './components/view-assigned-submissions-table';

function ViewAssignedSubmissions() {
    return (
        <>
            <PageWrapper>
                <OptionsHeader href='/reviewer/dashboard' title='View Assigned Submissions' />
                <ViewAssignedSubmissionsTable />
            </PageWrapper>
        </>
    )
}



export default ViewAssignedSubmissions