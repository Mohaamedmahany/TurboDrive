import Link from "next/link";
import React from "react";

export default function CheckoutForm() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-10 px-4 flex justify-center pt-27">
      <div className="w-full max-w-3xl bg-gray-800 rounded-xl p-6 shadow-xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Payment Details</h2>

        <form className="space-y-6">
          <div>
            <label className="text-sm font-semibold">Full Name</label>
            <input
              type="text"
              className="w-full mt-1 rounded-md bg-white/10 px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Email</label>
            <input
              type="email"
              className="w-full mt-1 rounded-md bg-white/10 px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Phone Number</label>
            <input
              type="text"
              className="w-full mt-1 rounded-md bg-white/10 px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Address</label>
            <input
              type="text"
              className="w-full mt-1 rounded-md bg-white/10 px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold">City</label>
              <input
                type="text"
                className="w-full mt-1 rounded-md bg-white/10 px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-sm font-semibold">ZIP Code</label>
              <input
                type="text"
                className="w-full mt-1 rounded-md bg-white/10 px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold">Card Number</label>
            <input
              type="text"
              placeholder="xxxx xxxx xxxx xxxx"
              className="w-full mt-1 rounded-md bg-white/10 px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold">Expiry Date</label>
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full mt-1 rounded-md bg-white/10 px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-sm font-semibold">CVV</label>
              <input
                type="text"
                placeholder="123"
                className="w-full mt-1 rounded-md bg-white/10 px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <button className="w-full py-3 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-semibold text-lg transition">
            Pay Now
          </button>
          <Link href={"/products"}>
            <button className="w-full py-3 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-semibold text-lg transition">
              Back To Cars
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
