import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { Button, Typography } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { UserTable } from './user-table';

function ViewAllUsers({ handleOptionDeSelect }) {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:5000/api/admin/all-users', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.ok) {
          const data = await response.json();
          setAllUsers(data);
        } else {
          console.error('Failed to fetch users');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <div className='flex justify-between mb-5'>
        <div>
          <Button
            variant='text'
            className='flex items-center gap-2'
            onClick={() => { handleOptionDeSelect(); }}>
            <ArrowLeftIcon className='h-4 w-4' /> Go Back
          </Button>
        </div>
        <div>
          <Typography
            variant="h3"
            color="blue-gray">
            View All Users
          </Typography>
        </div>
      </div>
      <Typography>
        {allUsers.length > 0 ? (
          <UserTable />
        ) : (
          'No users found.'
        )}
      </Typography>
    </>
  );
}

export default ViewAllUsers;
