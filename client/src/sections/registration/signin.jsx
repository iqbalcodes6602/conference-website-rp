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
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/users/login', { email, password })
                .then((response) => {
                    console.log(response.data.token)
                    localStorage.setItem('token', response.data.token);
                    const decodedToken = jwtDecode(response.data.token)
                    login(decodedToken);
                    console.log(jwtDecode(response.data.token))
                    if (decodedToken.role === 'admin')
                        navigate('/admin/dashboard');
                    else if (decodedToken.role === 'reviewer')
                        navigate('/reviewer/dashboard');
                    else
                        navigate('/user/dashboard');
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
                        onChange={(e) => setEmail(e.target.value)}
                        label='Email'
                        id="email"
                        color="gray"
                        size="lg"
                        type="text"
                        name="email"
                        className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
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
                        label='Password'
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
    )
}

export default SignIn