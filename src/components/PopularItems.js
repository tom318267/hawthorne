import React from "react";
import { POPULAR_ITEMS } from "../data";
import Item from "../components/Item";

const PopularItems = () => {
  return (
    <div className="font-quest py-20">
      <h2 className="flex text-2xl sm:text-3xl justify-center">
        Popular Items
      </h2>
      <div className="flex flex-col items-center sm:flex-row sm:flex-wrap sm:items-stretch sm:justify-center">
        {POPULAR_ITEMS.map(({ name, price, img }) => (
          <Item key={name} name={name} price={price} img={img} />
        ))}
      </div>
    </div>
  );
};

export default PopularItems;
