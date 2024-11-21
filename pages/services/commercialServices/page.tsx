'use client'
import Link from "next/link"
import Image from "next/image"
import snowimg1 from '@/app/images/commercial-landscaping-fountain.webp'
import snowimg2 from '@/app/images/office-buildings-surrounding-commercial-landscaping.webp'
export default function CommercialPage() {
    return (
        <>
           <div className="bg-blue-400 p-4 text-white w-full mt-10 text-center" >
   <h1 className=" text-3xl" >Commercial Landscaping & Lawn Care</h1>
    <p className="text-2xl mt-2" >Get instant service call <Link href={"https://wa.me/+18338502091"} className="hover:underline" >(833) 850-2091</Link> </p>
 </div>   
 <div>
 <div className="ml-56 mr-48 pt-20 px-5 bg-white" >
                <h1 className="text-blue-400 text-4xl font-semibold" >
                Grounds Care Services for Homeowners
                </h1>
                <div className="flex" >
                <div>
             <p>   The Grounds Guys serves homeowners across the United States, with more than 180 U.S. franchise locations. Our team is proud to continue to earn our reputation for reliable and professional work, excellent service, and our commitment to getting the job done right the first time. </p><br />
                <p>We enjoy what we do, so providing service with a smile is easy. We always arrive on time, in uniform, and drive clean, branded vehicles. We clean up after ourselves, so your property always looks better than when we found it.</p>

                </div>
                <div>
                    <Image src={snowimg1} alt= {"snowImg"} width={800} height={800} className="p-2" />
                </div>
                </div> 
             </div>
             <div className="ml-56 mr-48 pt-20 px-5 bg-white" >
                <h1 className="text-blue-400 text-4xl font-semibold" >
                Choose Our Professionals with Confidence
                </h1>
                <div className="" >
                <Image src={snowimg2} alt= {"snowImg"} width={800} height={800} className="p-2" />
                <div>
             <p>  Here at The Grounds Guys, we are dedicated to tending to our clients' commercial lawn care needs. Our attentive and thorough team of experts is professional, honest, and trustworthy, which is what makes us America's trusted landscape team. You can rely on us to keep your commercial property looking its best. </p><br />
                <p>As part of our commitment to excellence, we deliver status and quality reports in a timely matter to ensure what we do always meets or exceeds our standards. Business owners know they can turn to us for friendly, prompt, professional lawn care services. Our fast response times are guaranteed and we always use advanced equipment that is sharpened daily.</p><br />
                <p>With the combination of our experience, expertise, and values-driven practices, you can have confidence in us. We proudly serve local, regional, and national clients in the United States. The Grounds Guys have more than 200 locations across the nation. Our commercial clients include schools, banks, hotels, and more.</p>

                </div>
                <div>
                  
                </div>
                </div>
                </div>
 </div>
        </>
    )
}