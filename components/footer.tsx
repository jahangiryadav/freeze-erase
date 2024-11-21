'use client'
import Link from "next/link"
import logo from '../images/ice-crystal-svgrepo-com.svg'
import Image from "next/image"
export default function Footer() {
    return (//
        <>
       <div className="bg-gray-800 text-white" >
       <div className="grid grid-cols-3  mt-20 pl-20" >
            <div className="pl-30 pt-10 pb-20 text-center" >
            <h1 className="text-3xl font-bold" >Snow Freezer</h1> 
              <Image src={logo}alt={"Logo"} height={50} width={50} className="ml-56" />
    
            <div className="text-center" >
            <h1>
                Contact Us
              </h1>
            <Link href={"https://wa.me/+18338502091"} className="hover:underline" >(833) 850-2091</Link>
            </div>
            </div>
            <div className="mt-14 -ml-48 " >
              <ul className="text-center" >
                <li><Link href={"/"} >Home</Link></li>
                <li><Link href={"/pages/contact"} >Contact us</Link></li>
                <li><Link href={"/pages/services/residentialServices"} >Residential Services</Link></li>
                <li><Link href={"/pages/services/commercialServices"} >Commercial Services</Link></li>
                <li><Link href={"/pages/Booknow/new"} >Book now</Link></li>
                <ul><Link href={"/pages/adminLogin"} >Admin Login</Link></ul>
              </ul>
            </div>
            <div>
              
                <div className="flex gap-5 text-3xl p-2 mt-20" >
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
           
         </div>
         <div className="px-20 pb-20" >
         Copyright © 2024 Freeze erase. All rights reserved. This information is not intended as an offer to sell, or the solicitation of an offer to buy, a franchise. It is for information purposes only. Freeze erase is a registered trademark of Freeze erase SPV LLC.

         </div>
       </div>
        
        </>
    )
}