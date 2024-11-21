'use client'
import React, { useState } from "react"
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { backendURL } from "@/app/utils/constants";

export default function AdminLogin() {
    const [email, setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [error, setError] = useState('')
    const router = useRouter()

    const handleEmail = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(ev.target.value);
    };

    const handlePassword = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(ev.target.value);
    };
    const handleLoginSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        try {
            const { data } = await axios.post(`${backendURL}/admin/login`, { email, password });
            console.log({ data });

            localStorage.setItem('token', data.token);
            


            alert("Login successful!");
           
            router.push('/pages/admin/dashboard');
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error(error.response?.data || error.message);
            console.log(setError(error.response?.data?.error || "Login failed. Please try again" ))
            }
            console.error('Login failed:', error);
          

        }
      
    };
    return (
        <>
        <div className="mt-4 grow items-center justify-around">
            <h1 className="text-center m-5 font-bold text-4xl">Admin Login</h1>
            <form className="max-w-2xl mx-auto border p-4" onSubmit={handleLoginSubmit}>
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                <input 
                   className='w-full'
                    type="email"
                    placeholder="example@gmail.com"
                    value={email}
                    onChange={handleEmail}
                />
                <input
                    className='w-full'
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={handlePassword}
                />
                <button className="bg-black text-white p-2 w-full rounded-2xl mt-8">Login!</button>
                
            </form>
        </div>
        </>
    )
}

function setError(arg0: any) {
    throw new Error("Function not implemented.");
}
