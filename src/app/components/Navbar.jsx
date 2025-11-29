"use client";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo */}
          <div className="w-40">
            <img src="/logo.png" alt="logo" />
          </div>

          {/*  Links */}
          <div className="hidden md:flex flex-1 justify-center space-x-8">
            <Link href={"/"}>
              <p className="text-white font-bold text-xl cursor-pointer">
                Home
              </p>
            </Link>

            <Link href={"/products"}>
              <p className="text-white font-bold text-xl cursor-pointer">
                Our Cars
              </p>
            </Link>

            <Link href={"/about"}>
              <p className="text-white font-bold text-xl cursor-pointer">
                About
              </p>
            </Link>

            <Link href={"/contact"}>
              <p className="text-white font-bold text-xl cursor-pointer">
                Support
              </p>
            </Link>
          </div>

          {/*  Buttons */}
          <div className="hidden md:flex space-x-2">
            <Link href="/Login">
              <button className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700">
                Log in
              </button>
            </Link>

            <Link href="/Register">
              <button className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700">
                Register
              </button>
            </Link>
          </div>

          {/*  Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen(!open)}
              className="text-white text-2xl"
            >
              {open ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black px-4 pb-4 space-y-4">

          <Link href="/" onClick={() => setOpen(false)}>
            <p className="block text-white font-bold  text-xl hover:text-gray-200 cursor-pointer">
              Home
            </p>
          </Link>

          <Link href="/products" onClick={() => setOpen(false)}>
            <p className="block text-white font-bold  text-xl pt-1 pb-1 hover:text-gray-200 cursor-pointer">
              Our Cars
            </p>
          </Link>

          <Link href="/about" onClick={() => setOpen(false)}>
            <p className="block text-white font-bold  text-xl pb-1 hover:text-gray-200 cursor-pointer">
              About
            </p>
          </Link>

          <Link href="/contact" onClick={() => setOpen(false)}>
            <p className="block text-white font-bold pb-3 text-xl hover:text-gray-200 cursor-pointer">
              Contact
            </p>
          </Link>

          <Link href="/Login" onClick={() => setOpen(false)}>
            <button className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-700">
              Log in
            </button>
          </Link>

          <Link href="/Register" onClick={() => setOpen(false)}>
            <button className="w-full bg-gray-800 mt-1 text-white py-2 rounded hover:bg-gray-700">
              Register
            </button>
          </Link>

        </div>
      )}
    </nav>
  );
};

export default Navbar;
