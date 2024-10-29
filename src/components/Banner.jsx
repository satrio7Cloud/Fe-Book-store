import React from "react";
import BannerCard from "../home/BannerCard";

const Banner = () => {
  return (
    <div className="px-4 lg:px-24 bg-teal-200 flex items-center rounded-2xl">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 py-40 ">
        {/* left side */}
        <div className="md:w-1/2 space-y-8">
          <h2 className="text-6xl font-bold leading-snug text-black">
            Buy and Sell Your Books
            <span className="text-blue-600"> for the Beast Price</span>
          </h2>
          <p className="md:w-4/5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi ut
            voluptas illo rem expedita vitae dignissimos illum ipsam magni,
            dolor nesciunt tempora autem iure. Officia, rerum vero. Nostrum,
            veniam ipsum. Lorem ipsum dolor, illum ipsam magni, dolor nesciunt
            tempora autem iure.
          </p>
          <div>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search a Book"
              className="py-2 px-2 rounded-s-lg outline-none"
            />
            <button className="bg-blue-600 px-6 py-2 text-white font-medium hover:bg-teal-950 transition-all ease-in duration-200">
              Search
            </button>
          </div>
        </div>
        {/* right side */}
        <div>
          <BannerCard />
        </div>
      </div>
    </div>
  );
};

export default Banner;
