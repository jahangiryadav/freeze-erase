'use client'
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import backgroundImg from '@/app/images/snowbg.jpeg'; // Import the image
import { backendURL } from "@/app/utils/constants";

export default function AdminRegister() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();

    const handleUsername = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(ev.target.value);
    };

    const handleEmail = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(ev.target.value);
    };

    const handlePassword = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(ev.target.value);
    };

    const registerUser = async (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault(); // Prevent default form submission behavior
        try {
            alert("Registration is in process");
            const {data} = await axios.post(`${backendURL}/admin/register`, {
                username,
                password,
                email
            })
            console.log(data);
         
            router.push('/pages/adminLogin'); // Redirect after successful registration
        } catch (error: any) {
            console.error("Registration error:", error);
            if (error.response && error.response.data && error.response.data.message) {
                setErrorMessage(error.response.data.message);
            } else if (error.request) {
                setErrorMessage('Network error. Please check your server or network connection.');
            } else {
                setErrorMessage('Registration failed. Please try again.');
            }
        }
    };

    return (
        <div 
            className="min-h-screen flex items-center justify-center" 
            style={{ backgroundImage: `url(${backgroundImg.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-center m-5 font-bold text-4xl">Register Here!</h1>
                <form onSubmit={registerUser}>
                    {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}

                    <label htmlFor="username" className="sr-only">Username</label>
                    <input
                        id="username"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={handleUsername}
                        className="p-2 w-full rounded-lg border border-gray-300 mb-4"
                    />

                    <label htmlFor="email" className="sr-only">Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="example@gmail.com"
                        value={email}
                        onChange={handleEmail}
                        className="p-2 w-full rounded-lg border border-gray-300 mb-4"
                    />

                    <label htmlFor="password" className="sr-only">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePassword}
                        className="p-2 w-full rounded-lg border border-gray-300 mb-4"
                    />

                    <button type="submit" className="bg-black text-white p-2 w-full rounded-lg mt-8">
                        Register!
                    </button>
                </form>
            </div>
        </div>
    );
}
