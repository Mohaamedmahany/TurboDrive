"use client";
import Link from "next/link";
import { cars } from "../products/data/carsData";
import React from 'react'
const TopCars = () => {
      const topCars = [...cars]
    .sort((car1, car2) => car2.price - car1.price)
    .slice(0, 3)
  return (
    <div className="w-full min-h-[60vh] bg-gray-900 flex justify-center items-center px-4">
  <div className="flex flex-col items-center pt-30">
    <h1 className="text-4xl font-bold text-white mb-8 text-center">
     The best cars
    </h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {topCars.map((car) => (
        <div
          key={car.id}
          className="bg-gray-800 rounded-xl p-4 shadow-lg hover:scale-105 transition duration-300"
        >
          <img
            src={car.img}
            alt={car.title}
            className="w-full h-60 object-cover rounded-md"
          />

          <h2 className="text-white text-xl font-bold mt-3">{car.title}</h2>

          <p className="text-amber-400 text-lg font-semibold">{car.price} EGP</p>

          <p className="text-gray-400">Model: {car.model}</p>
        </div>
      ))}
    </div>
<Link href={"/products"} >
    <button className="bg-amber-600 text-gray-900 font-bold mt-7 py-3 px-8 rounded-full hover:bg-amber-500 transition duration-300">
      Browse other cars
    </button>
    </Link>
  </div>
</div>



  )
}

export default TopCars