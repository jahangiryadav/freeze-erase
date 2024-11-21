'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { getProfileData } from '@/app/utils/profileService';
import { logout } from '@/app/utils/profileService';
import Link from 'next/link';
import { backendURL } from '@/app/utils/constants';
// Define types
interface Profile {
  username: string;
  email: string;
}

interface Booking {
  serviceType: string;
  description: string;
  address: string;
  contact: string;
}

interface ErrorResponse {
  message: string;
}

export default function Dashboard() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ErrorResponse | null>(null);
  const [showProfile, setShowProfile] = useState(false); // State to manage profile visibility
  const router = useRouter();

  useEffect(() => {
    getProfileData(setProfile, setError, setLoading);

    const getBookingData = async () => {
      try {
        const { data } = await axios.get(`${backendURL}/service/bookings`);
        setBookings(data);
      } catch (err: any) {
        setError({ message: 'Error fetching bookings' });
      } finally {
        setLoading(false);
      }
    };

    getBookingData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    setTimeout(() => {
      router.push('/');
    }, 3000);
    return <div>Error: {error.message}. Redirecting to homepage...</div>;
  }

  if (!profile) {
    setTimeout(() => {
      router.push('/');
    }, 3000);
    return <div>No profile data found. Redirecting to homepage...</div>;
  }

  // Click handler to toggle profile details
  const handleProfileToggle = () => {
    setShowProfile((prev) => !prev);
  };

  const handleLogout = async () => {
    try {
     logout(() => {
      window.location.href = '/'
     })
    } catch (error: any) {
      console.error('Logout error:', error.response ? error.response.data.message : error.message);
    }
  };

  return (
    <div className='m-5' >
    <div >
    <h1>Dashboard</h1>

{/* Button to toggle profile details */}
<div className='flex' >

<button className="bg-blue-600 mt-4 px-4 py-2 text-white" onClick={handleProfileToggle}>
  {showProfile ? 'Hide Profile Details' : 'Show Profile Details'}
</button>

<div className='absolute right-10'  >
  <Link href={"/pages/admin/Addpricing"} className='bg-blue-600 mt-4 px-4 py-2 text-white' >Add Pricing</Link>
</div>
</div>
</div>

{/* Conditional rendering of profile details */}
<div>
{showProfile && (
  <div className='relative right-0' >
    <h2>Profile Details</h2>
    <p>Name: {profile.username}</p>
    <p>Email: {profile.email}</p>
  </div>
)}

    </div>

      <h2>Booking Details</h2>
      {bookings.length > 0 ? (
        <ul>
          {bookings.map((booking, index) => (
            <li key={index} className="border p-4 my-2">
              <p><strong>Service Type:</strong> {booking.serviceType}</p>
              <p><strong>Description:</strong> {booking.description}</p>
              <p><strong>Address:</strong> {booking.address}</p>
              <p><strong>Contact:</strong> {booking.contact}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No bookings found.</p>
      )}

      <button className="bg-red-600 mt-4 px-4 py-2 text-white" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
