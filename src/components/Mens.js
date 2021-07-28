import React from "react";
import { MENS_DATA } from "../data";
import Item from "./Item";

const Mens = () => {
  console.log(MENS_DATA);
  return (
    <div className="font-quest py-8">
      <h2 className="flex text-2xl justify-center font-noto pt-14">Mens</h2>
      <div className="flex flex-col items-center sm:flex-row sm:flex-wrap sm:items-stretch sm:justify-center">
        {MENS_DATA.map(({ name, price, img }) => (
          <Item name={name} price={price} img={img} />
        ))}
      </div>
    </div>
  );
};

export default Mens;
