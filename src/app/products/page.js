import Link from "next/link";
import { cars } from "./data/carsData";

export default function ProductsPage() {
  return (
    <div id="products" className="container mx-auto p-5    ">
      <h1 className="text-4xl font-bold mb-15 mt-20 text-center text-white">
        Our Cars
      </h1>

      <div className="flex flex-col gap-6 bg-gray-900 ">
        {cars.map((car) => (
          <div
            key={car.id}
            className="border rounded-lg overflow-hidden hover:shadow-lg 
                       flex flex-col md:flex-row"
          >
            <img
              src={car.img}
              alt={car.title}
              className="w-full md:w-1/2 h-60 md:h-100 object-cover"
            />

            <div className="w-full md:w-1/3 p-4 flex flex-col justify-center items-center">
              <h2 className="font-bold text-5xl  mb-2 text-white">
                {car.title}
              </h2>

              <p className=" font-bold mb-1 text-white text-2xl pt-2.5 pb-2.5">
                Price: {car.price.toLocaleString()} $
              </p>

              <p className=" font-bold mb-4 text-white text-2xl">
                Model: {car.model}
              </p>

              <Link href={`/products/${car.id}`}>
                <button className="px-4 py-2 bg-indigo-950 text-white rounded hover:bg-indigo-800 cursor-pointer w-max">
                  Car details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
