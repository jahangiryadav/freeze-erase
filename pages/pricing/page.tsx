'use client';

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { backendURL } from "@/app/utils/constants";
interface PricingData {
  _id:number,
  serviceType: string;
  description: string;
  price: number;
  contact: string;
}

export default function AdminPricing() {
  const [pricingData, setPricingData] = useState<PricingData[]>([]); // State to hold pricing data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPricingData = async () => {
      try {
        const response = await axios.get(`${backendURL}/admin/getpricing`);
        setPricingData(response.data);
      } catch (err) {
        setError("Error fetching pricing data");
      } finally {
        setLoading(false); 
      }
    };

    fetchPricingData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-semibold mb-6">Pricing Information</h1>
      {pricingData.length > 0 ? (
        pricingData.map((pricing, index) => (
          <div key={index} className="mb-4">
            <div className="border border-t-2" ></div>
            <Link   href={{
                pathname: `Booknow/${pricing._id}`,
               
              }} >
            <h2 className="text-xl font-bold">{pricing.serviceType}</h2>
            <p>{pricing.description}</p>
            <p>Price: ${pricing.price}</p>
            <p>Contact: {pricing.contact}</p>
            </Link>
            
          </div>
        ))
      ) : (
        <div>No pricing data available.</div>
      )}
    </div>
  );
}
