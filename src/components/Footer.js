import React from "react";

const Footer = () => {
  return (
    <div className="absolute bottom-0 w-full">
      <div className="bg-black w-full flex justify-evenly py-12 font-quest text-white text-sm footer-container">
        <div className="flex flex-col list-none">
          <li>Home</li>
          <li>About Us</li>
          <li>Careers</li>
          <li>Contact</li>
        </div>
        <div className="flex flex-col list-none">
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </div>
        <div className="flex flex-col list-none">
          <li>Terms of Use</li>
          <li>Affiliates</li>
          <li>Private Policy</li>
          <li>Support</li>
        </div>
      </div>
      <h2 className="bg-black text-white text-center pb-4 text-xs sm:text-sm">
        @ 2021 Hawthorne Apparel Co. All Rights Reserved.
      </h2>
    </div>
  );
};

export default Footer;
