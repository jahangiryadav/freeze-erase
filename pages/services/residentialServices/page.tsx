'use client'
import Link from "next/link"
import Image from "next/image"
import snoImg from '../../../images/snowImg.webp'
export default function ResidentialServices() {
    return (
        <>
         <div className="bg-gray-50" >
         <div className="bg-blue-400 p-4 text-white w-full mt-10 text-center" >
   <h1 className=" text-3xl" >Residential Landscaping & Lawn Care</h1>
    <p className="text-2xl mt-2" >Get instant service call <Link href={"https://wa.me/+18338502091"} className="hover:underline" >(833) 850-2091</Link> </p>
 </div>     
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
                    <Image src={snoImg} alt= {"snowImg"} width={800} height={800} className="p-2" />
                </div>
                </div> 
             </div>
             <div className="px-5 ml-56 mr-48 mt-20" >

               <div>
               <h1 className="text-4xl text-blue-400 font-semibold" >Why Are Professional Landscaping Services Important?</h1>
                <div className="mt-5" >
            <p>    Hiring The Grounds Guys is the best and easiest way to ensure your landscape is professionally cared for and always looks great. A great-looking yard can increase your home's curb appeal and value. Our professional landscaping service does more than make your property look better. It can also help ensure your property complies with local HOA requirements.</p> <br />
            <p>If you're planning to sell your home, professional lawn care and landscape service can help increase your home's property value and make it more attractive to prospective buyers. Homeowners with a busy schedule also use our services so they can enjoy more time with family and friends. After all, nobody wants to spend their free time doing hours of labor-intensive yard work, especially after a long workweek. Let your local professionals from The Grounds Guys do all the work for you so you can spend more time doing what you love.</p>
                </div>
               </div>
            <div className="mt-5" >
                <h1 className="text-4xl text-blue-400 font-semibold" >
                More Reasons to Hire a Professional for Landscaping Services:
                </h1>
            </div>
                <div className="pl-4" >
                    <p>Create a landscape design that is functional and beautiful.</p><br />
                    <p>Choose the best plants, shrubs, and trees suited for your region and yard.</p><br />
                    <p>Save money by not having to replace plants and trees as often.</p><br />
                    <p>Reduce stress of caring for plants and trees.</p><br />
                    <p>Regularly scheduled maintenance will keep your lawn and landscaping healthy and looking its best.</p><br />
                </div>
                <div >
               <p> Landscape maintenance is a must if you want to keep your yard and home looking good all year round. The Grounds Guys offer landscape maintenance that helps save you time and effort and ensures that your yard looks beautiful, no matter the season.</p><br />
               <p>Our professional landscaping services include fertilizing, watering, pruning, trimming, mowing and edging, and general lawn care maintenance. Plus, we offer professional weed removal services to eliminate and control pesky weeds!</p>
                </div>
             <div className="mt-5" >
                <h1 className="text-4xl text-blue-400 font-semibold" >Other Residential Landscaping Services</h1>
                <div className="mt-2" >
                    <p>Our residential landscaping professionals can help you create a visually appealing and functional landscape design. We select trees and foliage that are suitable for your region, add beauty, and provide much-needed shade during warm, sunny days. We can also install and repair irrigation systems to help keep your garden and yard properly watered, so they look great all year!</p>
                  <Link href={"/pages/contact"} className="text-blue-400 hover:underline"  >Contact us</Link> to learn more about our hardscape and other residential landscaping services that can help you have the best-looking house in the neighborhood.
                </div>
             </div>
             </div>
         </div>
        </>
    )
}