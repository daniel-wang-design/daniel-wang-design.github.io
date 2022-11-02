import React from "react";
import Image from "next/image";
import aboutImage from '../public/assets/about.jpg';

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
        <div className="flex items-center justify-center w-full h-auto pt-2 m-auto duration-300 ease-in shadow-xl rounded-xl shadow-gray-400 hover:scale-105">
        <Image className="rounded-xl"
          src={aboutImage}
          alt="/"
          width="1000"
          height="100"
        />
        </div>
      </div>
    </div>
  );
};
