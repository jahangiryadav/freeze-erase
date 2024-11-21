'use client'
import Image from "next/image";
import React from "react";
import Link from "next/link";
import bgImg from './images/geo-pages-primary-hero-desktop.webp'
import { useState } from "react";
interface Location {
  lat: number | null;
  lng: number | null;
}
export default function Home() {

  return (
<div className="" >
 
 <div className="bg-blue-400 p-4 text-white w-full mt-10 text-center" >
   <h1 className=" text-3xl" >Snow and Ice Management</h1>
    <p className="text-2xl mt-2" >Get instant service call <Link href={"https://wa.me/+18338502091"} className="hover:underline" >(833) 850-2091</Link> </p>
 </div>
 <div>
  <Image src={bgImg} className="mt-2 w-full"  alt="bg-img" height={500} width={500} />
  <div className="absolute right-2 top-56 bg-black bg-opacity-50 text-white px-5 py-2 flex"  >
    <div className="flex gap-5 text-3xl p-2" >
      {/* Facebook logo */}
      <Link href={'https://www.facebook.com/'}  target="_blank" >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30">
  <path fill="#FFFFFF" d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.463.099 2.794.143v3.24h-1.916c-1.504 0-1.795.715-1.795 1.763v2.31h3.59l-.467 3.622h-3.123V24h6.116c.73 0 1.324-.593 1.324-1.324V1.325C24 .593 23.407 0 22.675 0z"/>
</svg>
 {/* x Logo */}
</Link> 
<Link href={"https://x.com/?lang=en"} >
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30">
  <path fill="#FFFFFF" d="M24 4.557a9.83 9.83 0 01-2.828.775 4.939 4.939 0 002.165-2.724 9.865 9.865 0 01-3.127 1.195 4.924 4.924 0 00-8.384 4.482A13.978 13.978 0 011.671 3.149 4.922 4.922 0 003.149 9.86a4.904 4.904 0 01-2.229-.616v.062a4.923 4.923 0 003.946 4.827 4.935 4.935 0 01-2.224.084 4.924 4.924 0 004.6 3.417A9.874 9.874 0 010 19.54a13.94 13.94 0 007.548 2.213c9.057 0 14.009-7.512 14.009-14.009 0-.213-.004-.425-.014-.636A10.012 10.012 0 0024 4.557z"/>
</svg>
</Link>
{/* Instagram logo */}
<Link href={"https://www.instagram.com/"} >
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
</svg>


</Link>
{/* youtube logo */}
<Link href={"https://www.youtube.com/"} >
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30">
  <path fill="#FFFFFF" d="M23.498 6.186a2.926 2.926 0 00-2.048-2.048C19.392 3.666 12 3.666 12 3.666s-7.392 0-9.45.472a2.926 2.926 0 00-2.048 2.048C.016 8.243.016 12.002.016 12.002s0 3.759.486 5.816a2.926 2.926 0 002.048 2.048C4.608 20.334 12 20.334 12 20.334s7.392 0 9.45-.472a2.926 2.926 0 002.048-2.048c.486-2.057.486-5.816.486-5.816s0-3.759-.486-5.816zM9.72 15.337V8.665l6.207 3.336-6.207 3.336z"/>
</svg>
</Link>

    </div>
   
  </div>
  <div className="bg-white bg-opacity-80 absolute top-80 tracking-wider" >
     <div className="ml-48 mt-10 mr-10 mb-10" >
     <h1 className="text-5xl font-bold text-blue-300 " >Industry-Leading Expertise in <br /> Lawn Care & Landscaping <br /> Services</h1>
    <div className="text-2xl  mt-5" >
    Trust The Freeze eraser professionals to take care of your <br /> residential or commercial grounds.
    </div>
     </div>
    </div>
 </div>
 <div className="text-center pb-10 bg-gray-200" >
  <h1 className="text-4xl font-bold pt-20" >How the Freeze erase can help you</h1>
  <div className="flex justify-center items-center mt-10">
  <div className="flex space-x-4">
   <Link href={"/pages/services/residentialServices"} >
   <div className="w-60 rounded-xl p-5 h-96 bg-blue-400 text-white">
      <h1 className="text-2xl font-semibold" >Residential Services</h1>
      <div className="mt-2 text-lg" >
        when our crew arrives you will get more than "just the lawn guy" who stops by with lawnmover. The Freeze eraser elite team of residential yard care proffesionals is meticulous and through.
      </div>
    </div>
    </Link>
   <Link href={"/pages/services/commercialServices"} >
   <div className="w-64 h-96 p-5 rounded-xl text-white bg-blue-400">
      <h1 className="text-2xl font-semibold" >Commercial Serivces</h1>
      <div className="mt-2 text-lg" >
        Making a good first impression with clients and visitors in an important part of keeping your buisness successful. Let the Freeze eraser do the work
      </div>
    </div>
   </Link>
 
  </div>
</div>
</div>
</div>
  );
}
