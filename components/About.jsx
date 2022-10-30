import React from "react";

export const About = () => {
  return (
    <div className="flex items-center w-full p-2 py-16 md:h-screen">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            euismod ex at nulla convallis, ut pellentesque justo pulvinar. Nam
            vestibulum sit amet enim sed fermentum. Praesent at consequat sapien
          </p>
        </div>
        <div className="flex items-center justify-center w-full h-auto p-4 m-auto duration-300 ease-in shadow-xl shadow-gray-400 rounded-xl hover:scale-105">
          <img
            src="https://media.istockphoto.com/photos/purple-space-stars-picture-id157639696?k=20&m=157639696&s=612x612&w=0&h=SdmnpR_xWbXDcd36SggDN0hPX18CqgUjgZ1WQsAK_18="
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};
