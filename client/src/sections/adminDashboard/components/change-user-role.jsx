import { Select, Option } from '@material-tailwind/react';
import React, { useState } from 'react';
import axios from 'axios';

const ChangeUserRole = ({ role, email }) => {
    const [selectedRole, setSelectedRole] = useState(role);

    const handleRoleChange = async (newRole) => {
        const token = localStorage.getItem('token');
        setSelectedRole(newRole);

        try {
            await axios.post(`http://localhost:5000/api/admin/change-user-role`,
                { email, role: newRole },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
        } catch (error) {
            console.error('Error updating role:', error);
        }
    };

    return (
        <Select
            value={selectedRole}
            label="Role"
            className="block w-full px-3 py-2 rounded-md shadow-sm sm:text-sm"
            onChange={(value) => handleRoleChange(value)} // Directly use the value passed by Material Tailwind's Select
        >
            <Option value="user">User</Option>
            <Option value="reviewer">Reviewer</Option>
            <Option value="admin">Admin</Option>
        </Select>
    );
};

export default ChangeUserRole;
