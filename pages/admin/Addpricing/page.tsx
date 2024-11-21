'use client';

import { getProfileData } from "@/app/utils/profileService";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from 'axios';
import { backendURL } from "@/app/utils/constants";

interface Profile {
  username: string;
  email: string;
}
interface ErrorResponse {
  message: string;
}

export default function AddPricing() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ErrorResponse | null>(null);
  const [title, setTitle] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [contact, setContact] = useState('');
  const handleServiceType = (ev: React.ChangeEvent<HTMLSelectElement>) => setServiceType(ev.target.value);
  const router = useRouter();

  useEffect(() => {
    getProfileData(setProfile, setError, setLoading);
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

  // Function to handle the pricing submission
  const setPricing = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload
    try {
      const response = await axios.post(`${backendURL}/admin/pricing`, {
        title:serviceType,
        description,
        price,
        contact
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      // Handle success (e.g., redirect to pricing page or reset form)
      alert('Pricing added successfully!');
      setTitle('');
      setDescription('');
      setPrice('');
      setContact('');
      if(response) {
        router.push('/pages/admin/dashboard')
      }
      else {
        console.log("Response not found")
      }
    } catch (err) {
      console.error(err);
      alert('Failed to add pricing.');
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-semibold mb-6">Add New Price</h1>
      <form className="space-y-4" onSubmit={setPricing}>
        {/* Service Type */}
        {/* <div>
          <label className="block text-lg font-medium mb-1">Service Type</label>
          <input
            type="text"
            value={title}
            onChange={(ev) => setTitle(ev.target.value)} // Capture input value
            className="w-full border border-blue-400 px-3 py-2 rounded-md"
            placeholder="Enter service type"
          />
        </div> */}
  <div>
          <label className="block text-lg font-medium mb-1">Service Type</label>
          <select
            className="w-full border border-blue-400 px-3 py-2 rounded-md"
            value={serviceType}
            onChange= {handleServiceType}
            required 
          >
            <option value="">Enter service type</option>
            <option value="snow-removal">Snow Removal</option>
            <option value="ice-melting">Ice Melting</option>
            <option value="sidewalk-clearing">Sidewalk Clearing</option>
            <option value="roof-snow-removal">Roof Snow Removal</option>
          </select>
        </div>
        {/* Description */}
        <div>
          <label className="block text-lg font-medium mb-1">Description</label>
          <textarea
            value={description}
            onChange={(ev) => setDescription(ev.target.value)} // Capture input value
            className="w-full border border-blue-400 px-3 py-2 rounded-md h-24 resize-none"
            placeholder="Enter description"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-lg font-medium mb-1">Price</label>
          <div className="flex items-center space-x-2">
            <input
              type="number"
              value={price}
              onChange={(ev) => setPrice(ev.target.value)} // Capture input value
              className="w-full border border-blue-400 px-3 py-2 rounded-md"
              placeholder="Enter price"
            />
            <span>$</span>
          </div>
        </div>

        {/* Contact Number */}
        <div>
          <label className="block text-lg font-medium mb-1">Contact Number</label>
          <input
            type="text"
            value={contact}
            onChange={(ev) => setContact(ev.target.value)} // Capture input value
            className="w-full border border-blue-400 px-3 py-2 rounded-md"
            placeholder="Enter contact number"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            className="w-full bg-blue-500 text-white px-3 py-2 rounded-full hover:bg-blue-600"
            type="submit"
          >
            Create New Pricing
          </button>
        </div>
      </form>
    </div>
  );
}
