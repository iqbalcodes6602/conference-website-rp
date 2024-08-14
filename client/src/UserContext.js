import { jwtDecode } from 'jwt-decode';
import { createContext, useState } from 'react';


// Create the UserContext with default value as null
export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const isUserValid = (token) => {
        try {
            const decoded = jwtDecode(token, 'ipdmis');
            if (decoded.username)
                return decoded;
            else
                return null;
        } catch (error) {
            console.error('Invalid token', error);
            return null;
        }
    };

    // Example function to log in a user
    const login = (userData) => {
        setUser(userData);
    };

    // Example function to log out a user
    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
    };

    return (
        <UserContext.Provider value={{ user, login, logout, isUserValid }}>
            {children}
        </UserContext.Provider>
    );
};