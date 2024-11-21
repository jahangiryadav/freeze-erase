'use client'
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import snowImg from '../images/ice-crystal-svgrepo-com.svg';
import { getProfileData } from "../utils/profileService";
import '@/app/globals.css';
import { useRouter } from "next/navigation";

interface Profile {
  username: string;
  email: string;
}
interface ErrorResponse {
  message: string;
}

export default function NavBar() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(false);
  const [Error, setError] = useState<ErrorResponse | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      const storedProfile = localStorage.getItem('profile');
      if (storedProfile) {
        setProfile(JSON.parse(storedProfile));
        setLoading(false);
      } else {
        try {
          await getProfileData(setProfile, setError, setLoading);
        } catch (error) {
          console.error("Error fetching profile:", error);
          setError({ message: "Failed to load profile." });
        } finally {
          setLoading(false);
        }
      }
    };

    fetchProfile();
  }, []);

  useEffect(() => {
    if (profile) {
      localStorage.setItem('profile', JSON.stringify(profile));
    } else {
      localStorage.removeItem("profile");
    }
  }, [profile]);

  return (
    <nav className="bg-[whitesmoke] border-white text-black">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl: space-x-reverse">
          <Image
            src={snowImg}
            className="h-8"
            alt="Flowbite Logo"
            width={32}
            height={32}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
            Freeze eraser
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-black">
            <li>
              <Link href="/" className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0">
                Home
              </Link>
            </li>
            <li className="relative group inline-block">
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center justify-between w-full py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 md:w-auto"
                type="button"
              >
                Services
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div id="dropdownNavbar" className="absolute z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 group-hover:block">
                <ul className="py-2 text-sm text-gray-700">
                  <li>
                    <Link href="/pages/services/residentialServices" className="block px-4 py-2 hover:bg-gray-100">
                      Residential
                    </Link>
                  </li>
                  <li>
                    <Link href="/pages/services/commercialServices" className="block px-4 py-2 hover:bg-gray-100">
                      Commercial
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link href="/pages/pricing" className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/pages/contact" className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/pages/Booknow/new" className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 relative bottom-2">
                Booknow
              </Link>
            </li>

            {profile && (
              <div className="text-black">
                <Link href={'/pages/admin/dashboard'}>Dashboard</Link>
              </div>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
