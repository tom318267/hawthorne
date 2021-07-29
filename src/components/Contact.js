import React from "react";

const Contact = () => {
  return (
    <div className="bg-grayBackground">
      <div className="w-3/4 my-0 mx-auto font-quest">
        <form className="flex flex-col py-20">
          <h1 className="text-2xl sm:text-3xl text-center mb-8">Contact Us</h1>
          <label>Name</label>
          <input className="border rounded-md pl-2 outline-none" type="text" />
          <label>Email Address</label>
          <input className="border rounded-md pl-2 outline-none" type="text" />
          <label>Message</label>
          <textarea
            className="border rounded-md mb-4 pl-2 outline-none"
            rows="4"
            cols="50"
          ></textarea>
          <button className="p-2 text-white bg-black rounded-md">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
