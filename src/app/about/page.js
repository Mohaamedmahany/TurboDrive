import Link from "next/link";
import React from "react";

export default function About() {
  return (

    <div
      id="about"
      className="min-h-[90vh]  w-full bg-gray-900 flex flex-col justify-evenly items-center px-4 pt-[100px] md:pt-[120px]"
    >
      <h2 className="text-4xl font-bold text-white pt-0">What do we offer ?</h2>

      <div className="container bg-gray-900 w-full flex flex-col md:flex-row justify-between items-center rounded-md p-6 gap-6">
        <div className="w-full md:w-1/2 h-64 md:h-80">
          <img
            src= "/logo.png"
            className="w-full h-full object-cover rounded-md"
            alt="car"
          />
        </div>

        <div className="w-full md:w-1/2 text-white">
          <p className="text-lg md:text-xl p-3 leading-8 font-bold">
            We are a platform specializing in showcasing the latest car models
            with detailed information to help you make the best purchase
            decision. Our goal is to provide you with all the information you
            need about each car: specifications, features, prices, and
            high-quality images—all in one place and presented in a simple and
            easy-to-understand way. We always strive to provide you with a
            comfortable and reliable experience so you can choose your car with
            complete peace of mind.
          </p>
          <Link href={"/products"}>
            <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 ms-3">
              Explore Cars
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
