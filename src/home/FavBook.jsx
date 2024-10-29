import React from "react";
import FaBookImg from "../assets/favoritebook.jpg";
import { Link } from "react-router-dom";

function FavBook() {
  return (
    <div className="px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12">
      <div className="md:w-1/2">
        <img src={FaBookImg} alt="" className="rounded-2xl md:w-10/12" />
      </div>
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-8xl font-bold my-5 md:w-3/4">
          Find Your Favorites <span className="text-blue-600">Books Here!</span>
        </h2>
        <p className="mb-10 text-lg md:w-5/6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dolores
          beatae error et tempora. In! Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Laudantium quod quidem odit, ipsum quibusdam sit.
        </p>
        {/* status */}
        <div className="flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14">
          <div>
            <h3 className="text-3xl font-bold">850+</h3>
            <p className="text-base">Book Listing</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">50+</h3>
            <p className="text-base">Register Users</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">1400+</h3>
            <p className="text-base">PDF Download</p>
          </div>
        </div>
        <Link to="/shop" className="mt-12 block">
          <button className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-2xl hover:bg-teal-950 transition-all duration-300">
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
}

export default FavBook;
