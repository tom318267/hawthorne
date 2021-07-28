import React, { useEffect } from "react";
import Aos from "aos";

const Item = ({ name, price, img }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-up" className="p-10">
      <div className="max-w-xs min-h-full rounded overflow-hidden shadow-lg font-quest">
        <img
          className="w-full h-imagevh sm:h-mdimagevh object-cover"
          src={img}
          alt="clothing"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base mb-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
          <div className="flex items-center justify-between">
            <p className="font-bold mr-4">${price}</p>
            <button className="bg-black py-2 px-4 text-white rounded-full text-xs sm:text-sm">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
