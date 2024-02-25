"use client";

import React from "react";
import { signOut, useSession } from "next-auth/react";


const Hero = () => {
  const { data: session } = useSession();
const user = session?.user;

  return (
    <>
      {/* <CountdownToFebruary28 /> */}
      <div>
        {/* <div class="bg-blue-500 sm:bg-green-500 md:bg-yellow-500 lg:bg-orange-500 xl:bg-red-500">
         -- Content -
          </div> */}
        <div
          className="hero min-h-screen bg-cover"
          style={{
            backgroundImage: "url(/images/saintmartinbg.jpg)",
            width: "100%",
            height: "100%",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-xl">
              <h1 className="mb-5 text-3xl md:text-6xl font-bold text-red-200 font-primary ">
                CSE Tour 2K24{" "}
              </h1>
              <p className="mb-5 font-secondary text-lg">
                Saint Martin Tour Organized By CSE 12th Batch.
              </p>
              {user ? (
  // If user has data
  <p className="text-xl ">  Thanks 
  <b className="text-green-400 text-2xl "> {user.personName} </b> for joining with us . 
</p>
  
) : (
  <div> 
  <p className="text-xl"> Join with Us  </p>
  <h3 className="mb-5 text-2xl md:text-5xl font-bold text-blue-200">  Cost: 4600 BDT
</h3>
<h3 className="mb-5 text-2xl md:text-5xl font-bold font-primary">
 018672 10 892 ( biKash, Nagad) 
</h3>
<a href="/register/booking" className="btn"> Book a Seat </a>
</div>
)}
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
