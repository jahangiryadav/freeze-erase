'use client'
import React, { ChangeEvent, useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import { backendURL } from '@/app/utils/constants';

export default function BookingPage({params}:any) {
  const [serviceType, setServiceType] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [Contact, setContact] = useState('');
  const [loading, setLoading] = useState(false);
 const {id} = useParams()
  const router = useRouter();
  const handleServiceType = (ev: React.ChangeEvent<HTMLSelectElement>) => setServiceType(ev.target.value);
  const handleDescription = (ev: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(ev.target.value);
  const handleAddress = (ev: React.ChangeEvent<HTMLInputElement>) => setAddress(ev.target.value);
  const handleContactNumber = (ev:ChangeEvent<HTMLInputElement>) => setContact(ev.target.value)
  const getCurrentLoc = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { longitude, latitude } = coords;
        const loc = `${latitude}, ${longitude}`;
        setAddress(loc);
        console.log("Current location set:", loc);
      });
    }
  };

  const handleBooking = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault(); // Prevent form refresh
    setLoading(true);

    try {
      console.log("Address being sent:", address); // Verify the address being sent
      const { data } = await axios.post(`${backendURL}/service/booking`, {
        serviceType,
        description,
        address: address || 'No address provided', // Ensure that an address is always sent
        contact: Contact,
      });
      // const { response } = await axios.post('')

      if (data) {
        console.log('Booking created successfully!');
        router.push('/pages/paymentss'); // Redirect to the homepage or another page after successful booking
      }
    } catch (error) {
      console.error('Booking failed:', error);
    } finally {
      setLoading(false);
    }
  };
 
    useEffect(() => {
      if(id !== 'new') {
      axios.get(`${backendURL}/admin/getpricing/${id}`).then((response) => {
        const data = response.data
        setServiceType(data.title)
        setDescription(data.description)
      })

    }
   
   }, [id])

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-semibold mb-6">Create a New Booking</h1>
      <form className="space-y-4" onSubmit={handleBooking}>
        {/* Service Type */}
        {/* <div>
          <label className="block text-lg font-medium mb-1">Service Type</label>
          <input
            type="text"
            className="w-full border border-blue-400 px-3 py-2 rounded-md"
            placeholder="Enter service type"
            value={serviceType}
            onChange = {handleServiceType}
            required
          />
        </div> */}
        
          {/* Modified */}
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
            className="w-full border border-blue-400 px-3 py-2 rounded-md h-24 resize-none"
            placeholder="Enter description"
            value={description}
            onChange={handleDescription}
            required
          />
        </div>

        {/* Address */}
        <div>
          <label className="block text-lg font-medium mb-1">Address</label>
          <input
            type="text"
            value={address}
            onChange={handleAddress}
            className="w-full border border-blue-400 px-3 py-2 rounded-md mb-2"
            placeholder="Enter address"
            required
          />
          <div className="text-center text-sm text-gray-600 mb-4">or</div>
          <button
            className="w-full bg-blue-500 text-white px-3 py-2 rounded-full hover:bg-blue-600"
            type="button"
            onClick={getCurrentLoc}
          >
            Set Current Location
          </button>
        </div>

        {/* Contact Number */}
        <div>
          <label className="block text-lg font-medium mb-1">Contact Number</label>
          <input
            type="text"
            className="w-full border border-blue-400 px-3 py-2 rounded-md"
            placeholder="Enter contact number"
            value={Contact}
            onChange={handleContactNumber}
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            className="w-full bg-blue-500 text-white px-3 py-2 rounded-full hover:bg-blue-600"
            type="submit"
            disabled={loading}
          >
            {loading ? 'Booking in Progress...' : 'Book Now'}
          </button>
        </div>
      </form>
    </div>
  );
}
