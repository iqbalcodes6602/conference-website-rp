import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import { Button, Input, Typography } from '@material-tailwind/react';
import React, { useState } from 'react';
import axios from 'axios';

function SignUp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/users/register', { username, password });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <Typography variant="h3" color="blue-gray" className="mb-2">
                Sign Up
            </Typography>
            <Typography className="mb-16 text-gray-600 font-normal text-[18px]">
                Enter your username and password to sign up
            </Typography>
            <form onSubmit={handleSubmit} className="mx-auto max-w-[24rem] text-left">
                <div className="mb-6">
                    <label htmlFor="username">
                        <Typography
                            variant="small"
                            className="mb-2 block font-medium text-gray-900"
                        >
                            Your Username
                        </Typography>
                    </label>
                    <Input
                        id="username"
                        color="gray"
                        size="lg"
                        type="text"
                        name="username"
                        placeholder="Username"
                        className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                        labelProps={{
                            className: "hidden",
                        }}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <Button type="submit" color="gray" size="lg" className="mt-6" fullWidth>
                    sign up
                </Button>
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
                    sign up with google
                </Button>
                <Typography
                    variant="small"
                    color="gray"
                    className="!mt-4 text-center font-normal"
                >
                    Already registered?{" "}
                    <a href="#" className="font-medium text-gray-900">
                        Sign in
                    </a>
                </Typography>
            </form>
        </div>
    );
}

export default SignUp;