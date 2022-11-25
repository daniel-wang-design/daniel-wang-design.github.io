import React, { useEffect } from "react";
import Image from "next/image";
import aboutImage from "../public/assets/about.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

export const About = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  });
  return (
    <div id="about" className="flex items-center w-full p-2 py-16 md:h-screen">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div data-aos="fade-right" className="col-span-2">
          <h1 className="uppercase tracking-wide text-[#bb86fc]">About Me</h1>
          <p className="py-2 text-[#ffffff]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            euismod ex at nulla convallis, ut pellentesque justo pulvinar. Nam
            vestibulum sit amet enim sed fermentum. Praesent at consequat sapien
          </p>
        </div>
        <div
          data-aos="fade-up"
          className="flex items-center justify-center w-full h-auto pt-2 m-auto duration-300 ease-in rounded-xl  hover:scale-105"
        >
          <Image
            className="rounded-xl"
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
