import React, { useState } from 'react';
import authService from '../appwrite/auth';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../store/authSlice';
import { Button, Input, Logo } from './index.js';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

function Signup() {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const create = async (data) => {
        setError("");
        try {
            const userData = await authService.createAccount(data);
            if (userData) {
                const userData = await authService.getCurrentUser();
                if (userData) dispatch(login(userData));
                navigate("/");
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="relative flex items-center justify-center min-h-screen ">

            <div className={`relative z-10 mx-auto w-1/2 max-w-lg text-white bg-neutral-800 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        {/* Logo */}
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold my-5 leading-tight">Sign up to create account</h2>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

                <form onSubmit={handleSubmit(create)}>
                    <div className='text-left space-y-5'>
                        <Input 
                            label="Full Name: "
                            placeholder="Enter your full name"
                            {...register("name", {
                                required: true,
                            })}
                        />
                        <Input
                            label="Email: "
                            placeholder="Enter your email"
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) =>
                                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                },
                            })}
                        />
                        <Input
                            label="Password: "
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: true,
                            })}
                        />
                    </div>
                    <Button type="submit" className="w-35 my-4">
                        Create Account
                    </Button>
                </form>
                <p className="mt-2 text-center text-base text-white/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all text-blue-500 duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Signup;
