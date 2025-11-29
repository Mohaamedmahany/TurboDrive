import Link from "next/link";
import { cars } from "../data/carsData";

export default async function CarDetail({ params }) {
  const { id } = await params;
  const car = cars.find((c) => c.id === parseInt(id));

  if (!car)
    return (
      <p className="p-8 text-red-500 text-center text-2xl font-semibold">
     The car is not here
      </p>
    );

  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-4 md:px-16 pt-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12">
        {/* infooo  */}
        <div className="w-full md:w-1/2 bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700 flex flex-col gap-6">
          <h2 className="text-4xl font-extrabold mb-2 text-yellow-400">
            {car.title}
          </h2>

          <p className="text-2xl mb-2">
            <span className="font-bold text-gray-300"> Price : </span>{" "}
            <span className="text-green-400">
              {car.price.toLocaleString()} $
            </span>
          </p>

          <p className="text-xl mb-2">
            <span className="font-bold text-gray-300"> Modal : </span>{" "}
            {car.model}
          </p>

          <p className="text-gray-300 leading-relaxed text-lg">
            An excellent car that combines powerful performance with modern
            design. Suitable for everyday use and offers a distinctive driving
            experience.
          </p>

          {/* butttttttttton */}
          <div className="flex gap-4 mt-4">
            <Link href={"/Checkout"} >
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300">
              Buy Now
            </button>
            </Link>
            <Link href={"/products"}>
              <button className="bg-yellow-900  hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300">
             Back to cars
              </button>
            </Link>
          </div>
          <div className="flex gap-4 items-center pt-5">
            <span>
              <a href="">
                {" "}
                <i className="fa-brands fa-facebook text-blue-400 text-3xl transition-all duration-300 hover:text-blue-500 hover:scale-110"></i>
              </a>
            </span>
            <span>
              <a href="">
                {" "}
                <i className="fa-brands fa-whatsapp text-green-500 text-3xl transition-all duration-300 hover:text-green-400 hover:scale-110"></i>
              </a>
            </span>
            <span>
              <a href="">
                {" "}
                <i className="fa-brands fa-instagram text-pink-600 text-3xl transition-all duration-300 hover:text-pink-400 hover:scale-110"></i>
              </a>
            </span>
            <span>
              <a href="">
                {" "}
                <i className="fa-brands fa-x-twitter text-gray-300 text-3xl transition-all duration-300 hover:text-gray-700 hover:scale-110"></i>
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
