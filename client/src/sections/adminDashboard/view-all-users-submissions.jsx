import React from 'react'
import PageWrapper from '../../components/page-wrapper'
import OptionsHeader from '../../components/options-header';
import ViewAllSubmissionsTable from './components/view-all-submissions-table';

function ViewAllUserSubmissions() {
  return (
    <>
      <PageWrapper>
        <OptionsHeader href='/admin/dashboard' title='View All User Submission' />
        <ViewAllSubmissionsTable />
      </PageWrapper>
    </>

  )
}

export default ViewAllUserSubmissions