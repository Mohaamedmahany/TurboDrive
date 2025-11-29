import Link from "next/link";
import { cars } from "../data/carsData";

export default async function CarDetail({ params }) {
  const { id } = await params;
  const car = cars.find((c) => c.id === parseInt(id));

  if (!car)
    return (
      <p className="p-8 text-2xl font-semibold text-center text-red-500">
     The car is not here
      </p>
    );

  return (
    <div className="min-h-screen px-4 py-16 text-white bg-gray-900 md:px-16 pt-50">
      <div className="flex flex-col items-start gap-12 mx-auto max-w-7xl md:flex-row">
        {/* infooo  */}
        <div className="flex flex-col w-full gap-6 p-8 bg-gray-800 border border-gray-700 shadow-2xl md:w-1/2 rounded-2xl">
          <h2 className="mb-2 text-4xl font-extrabold text-yellow-400">
            {car.title}
          </h2>

          <p className="mb-2 text-2xl">
            <span className="font-bold text-gray-300"> Price : </span>{" "}
            <span className="text-green-400">
              {car.price.toLocaleString()} $
            </span>
          </p>

          <p className="mb-2 text-xl">
            <span className="font-bold text-gray-300"> Modal : </span>{" "}
            {car.model}
          </p>

          <p className="text-lg leading-relaxed text-gray-300">
            An excellent car that combines powerful performance with modern
            design. Suitable for everyday use and offers a distinctive driving
            experience.
          </p>

          {/* butttttttttton */}
          <div className="flex gap-4 mt-4">
            <Link href={"/Checkout"} >
            <button className="px-6 py-2 font-bold text-white transition duration-300 bg-green-500 rounded-lg hover:bg-green-600">
              Buy Now
            </button>
            </Link>
            <Link href={"/products"}>
              <button className="px-6 py-2 font-bold text-white transition duration-300 bg-yellow-900 rounded-lg hover:bg-gray-700">
             Back to cars
              </button>
            </Link>
          </div>
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

        {/*  imaaaag */}
        <div className="w-full md:w-2/3">
          <img
            src={car.img}
            alt={car.title}
            className="w-full h-[36rem] md:h-[40rem] object-contain rounded-2xl shadow-2xl border border-gray-700"
          />
        </div>
      </div>
    </div>
  );
}
