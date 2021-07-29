import React from "react";
import Item from "../components/Item";
import { WOMENS_DATA } from "../data";

const Womens = () => {
  return (
    <div className="font-quest py-20">
      <h2 className="flex text-2xl sm:text-3xl justify-center">Womens</h2>
      <div className="flex flex-col items-center sm:flex-row sm:flex-wrap sm:items-stretch sm:justify-center">
        {WOMENS_DATA.map(({ name, price, img }) => (
          <Item key={name} name={name} price={price} img={img} />
        ))}
      </div>
    </div>
  );
};

export default Womens;
