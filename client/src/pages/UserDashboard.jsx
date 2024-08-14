import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Updated import
import { UserContext } from '../UserContext';
function UserDashboard() {
    const { user, login, logout, isUserValid } = useContext(UserContext);
    const navigate = useNavigate();  // Updated hook

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token || !isUserValid(token)) {
            navigate('/registration');  // Updated method
            logout();
        }
    }, [navigate, isUserValid, logout]);

    return (
        <div>UserDashboard</div>
    );
}

export default UserDashboard;
