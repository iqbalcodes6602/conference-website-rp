import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import { Button, Input, Typography } from '@material-tailwind/react'
import React, { useContext, useState } from 'react'
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import { UserContext } from '../../UserContext';
import { useNavigate } from 'react-router-dom';

function SignIn() {
    const navigate = useNavigate();
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);
    const { user, login, logout, isUserValid } = useContext(UserContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/users/login', { username, password })
                .then((response) => {
                    console.log(response.data);
                    login(jwtDecode(response.data));
                    console.log(jwtDecode(response.data))
                    localStorage.setItem('token', response.data);
                    navigate('/user-dashboard');
                })
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div>
            <Typography variant="h3" color="blue-gray" className="mb-2">
                Sign In
            </Typography>
            <Typography className="mb-16 text-gray-600 font-normal text-[18px]">
                Enter your email and password to sign in
            </Typography>
            <form onSubmit={handleLogin} className="mx-auto max-w-[24rem] text-left">
                <div className="mb-6">
                    <label htmlFor="email">
                        <Typography
                            variant="small"
                            className="mb-2 block font-medium text-gray-900"
                        >
                            Your Email
                        </Typography>
                    </label>
                    <Input
                        onChange={(e) => setUsername(e.target.value)}
                        id="email"
                        color="gray"
                        size="lg"
                        type="text"
                        name="email"
                        placeholder="name@mail.com"
                        className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                        labelProps={{
                            className: "hidden",
                        }}
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password">
                        <Typography
                            variant="small"
                            className="mb-2 block font-medium text-gray-900"
                        >
                            Password
                        </Typography>
                    </label>
                    <Input
                        onChange={(e) => setPassword(e.target.value)}
                        size="lg"
                        placeholder="********"
                        labelProps={{
                            className: "hidden",
                        }}
                        className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                        type={passwordShown ? "text" : "password"}
                        icon={
                            <i onClick={togglePasswordVisiblity}>
                                {passwordShown ? (
                                    <EyeIcon className="h-5 w-5" />
                                ) : (
                                    <EyeSlashIcon className="h-5 w-5" />
                                )}
                            </i>
                        }
                    />
                </div>
                <Button type='submit' color="gray" size="lg" className="mt-6" fullWidth>
                    Sign in
                </Button>
                <div className="!mt-4 flex justify-end">
                    <Typography
                        as="a"
                        href="#"
                        color="blue-gray"
                        variant="small"
                        className="font-medium"
                    >
                        Forgot password
                    </Typography>
                </div>
                <Button
                    variant="outlined"
                    size="lg"
                    className="mt-6 flex h-12 items-center justify-center gap-2"
                    fullWidth
                >
                    <img
                        src={`https://www.material-tailwind.com/logos/logo-google.png`}
                        alt="google"
                        className="h-6 w-6"
                    />{" "}
                    sign in with google
                </Button>
                <Typography
                    variant="small"
                    color="gray"
                    className="!mt-4 text-center font-normal"
                >
                    Not registered?{" "}
                    <a href="#" className="font-medium text-gray-900">
                        Create account
                    </a>
                </Typography>
            </form>
        </div>
        // <div>
        //     <h1>Home Page</h1>
        //     {user ? (
        //         <div>
        //             <p>Welcome, {user.username}!</p>
        //             <button onClick={logout}>Logout</button>
        //         </div>
        //     ) : (
        //         <div>
        //             {/* <p>Please log in.</p>
        //             <button onClick={() => login({ name: 'John Doe' })}>Login as John Doe</button> */}
        //             <form onSubmit={handleLogin}>
        //                 <div className="space-y-1">
        //                     <Input
        //                         id="username"
        //                         type="text"
        //                         placeholder="Username"
        //                         value={username}
        //                         onChange={(e) => setUsername(e.target.value)}
        //                         required
        //                     />
        //                 </div>
        //                 <div className="space-y-1">
        //                     <Input
        //                         id="password"
        //                         type="password"
        //                         placeholder="Password"
        //                         value={password}
        //                         onChange={(e) => setPassword(e.target.value)}
        //                         required
        //                     />
        //                 </div>
        //                 <Button type='submit'>Log In</Button>
        //             </form>
        //         </div>
        //     )}
        // </div>
    )
}

export default SignIn