  import React from "react";

  export default function Contact() {
    return (
      
<div
  id="contact"
  className="min-h-[100vh] bg-gray-900 w-full flex justify-center items-center p-4 pt-[100px] md:pt-[120px]"
>
     
        <div className="container flex flex-col items-center justify-between w-full gap-10 p-6 bg-gray-900 rounded-md lg:flex-row">
          {/* --- INFO  --- */}
          <div className="flex flex-col justify-center w-full text-white info lg:w-1/2">
            <h3 className="p-1 text-xl font-bold lg:text-4xl">
              We are here to help !
            </h3>

            <p className="text-lg leading-8 lg:text-xl ps-2">
              Our Help Center is designed to be simple, organized, and easy to
              navigate. Whether you.re searching for answers to common questions
              or looking to reach out directly, you.ll find everything you need
              clearly arranged. Just browse, click, and get the support you.re
              looking for without any hassle.
            </p>
            <div className="flex items-center gap-4 pt-5">
              <span>
                <a  href="https://www.facebook.com/share/1AyvqzgQZW/" target=' blank'>
                  {" "}
                  <i className="text-3xl text-blue-400 transition-all duration-300 fa-brands fa-facebook hover:text-blue-500 hover:scale-110"></i>
                </a>
              </span>
              <span>
                <a href="https://wa.me/201125218188" target='blank'>
                  {" "}
                  <i className="text-3xl text-green-500 transition-all duration-300 fa-brands fa-whatsapp hover:text-green-400 hover:scale-110"></i>
                </a>
              </span>
              <span>
                <a href="https://www.instagram.com/mohany111?igsh=MWQzYXZwaTQ1MG1jbA=="target=' blank'>
                  {" "}
                  <i className="text-3xl text-pink-600 transition-all duration-300 fa-brands fa-instagram hover:text-pink-400 hover:scale-110"></i>
                </a>
              </span>
              <span>
                <a href="https://www.linkedin.com/in/mohamed-mahany-47b415342?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target=' blank'>
                  {" "}
                 
                  <i className="text-3xl text-blue-400 transition-all duration-300 fa-brands fa-linkedin hover:text-blue-500 hover:scale-110"></i>
                </a>
              </span>
            </div>
          </div>

          {/* --- FORM  --- */}
          <div className="w-full p-5 form lg:w-1/2">
            <div className="grid grid-cols-1 text-white gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold text-white"
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    id="first-name"
                    type="text"
                    name="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md px-3.5 bg-white/5 py-2 text-base text-white outline-1 outline-white/10 focus:outline-2 focus:outline-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold text-white"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    id="last-name"
                    type="text"
                    name="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 outline-white/10 focus:outline-2 focus:outline-indigo-500"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold text-white"
                >
                  Company
                </label>
                <div className="mt-2.5">
                  <input
                    id="company"
                    type="text"
                    name="company"
                    autoComplete="organization"
                    className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 outline-white/10 focus:outline-indigo-500"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-white"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 outline-white/10 focus:outline-indigo-500"
                  />
                </div>
              </div>

              {/* --- PHONE --- */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-semibold text-white"
                >
                  Phone number
                </label>
                <div className="mt-2.5">
                  <div className="flex rounded-md bg-white/5 outline-1 outline-white/10 focus-within:outline-2 focus-within:outline-indigo-500">
                    <div className="relative">
                      <select
                        id="country"
                        name="country"
                        autoComplete="country"
                        className="w-full py-2 pl-5 pr-1 text-base text-gray-300 bg-transparent rounded-md appearance-none"
                      >
                        <option>EG</option>
                        <option>US</option>
                        <option>EU</option>
                      </select>
                    </div>

                    <input
                      id="phone-number"
                      type="text"
                      name="phone-number"
                      placeholder="123-456-7890"
                      className="block w-full py-2 pl-2 pr-3 text-base text-white bg-transparent placeholder:text-gray-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* --- MESSAGE --- */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-white"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 outline-white/10 focus:outline-indigo-500"
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-gray-800 px-3.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-gray-700"
              >
              Send
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
