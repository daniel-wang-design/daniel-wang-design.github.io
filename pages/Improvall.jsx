import React from "react";
import Image from "next/image";
import netflixImg from "../public/assets/projects/netflix.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import aboutImage from "../public/assets/about.jpg";

const Improvall = () => {
  return (
    <div className="h-full w-full p-2 py-16 bg-[#111111]">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h1 className="uppercase tracking-wide text-[#bb86fc]">Improvall</h1>
          <p className="py-2 text-[#ffffff]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            euismod ex at nulla convallis, ut pellentesque justo pulvinar. Nam
            vestibulum sit amet enim sed fermentum. Praesent at consequat sapien
          </p>
        </div>
        <Image className="rounded-xl object-fill" src={aboutImage} alt="/" />
      </div>
      <div className="max-w-[1240px] grid grid-cols-2 md:grid md:grid-cols-2 gap-6 w-full h-auto pt-2 m-auto">
        <div>
          <h3 className="uppercase tracking-wide text-[#bb86fc]">
            Programming Languages
          </h3>
          <p className="text-white pt-2">Dart</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Improvall;
