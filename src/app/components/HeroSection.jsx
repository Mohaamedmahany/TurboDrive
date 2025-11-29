import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
<div 
id="HeroSection"
  style={{
    backgroundImage: 'url("/logoo.jpeg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
  className="h-screen flex justify-center items-center"
>
  <div
    style={{
      backgroundColor: "rgba(0,0,0,0.6)",
      width: "100%",
      height: "100%",
    }}
    className="flex justify-start items-center"
  >
    <div className="container text-white px-6 md:px-16 ">
      
      <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-[1.5]">
        Discover your perfect car — power, luxury, and performance with no limits.
      </h2>

      <p className="text-lg md:text-xl mb-6 text-gray-200">
        Explore the latest models with a smooth browsing experience designed to help you choose the best.
      </p>
 <Link href={"/products"} >
      <button className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-md text-white font-semibold transition">
        Browse Cars
      </button>
</Link>
    </div>
  </div>
</div>


  );
};

export default HeroSection;
