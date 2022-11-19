import React from "react";
import Image from "next/image";
import netflixImg from "../public/assets/projects/netflix.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import aboutImage from "../public/assets/about.jpg";
import "semantic-ui-css/semantic.min.css";
import { List } from "semantic-ui-react";
import aboutSvg from "../public/assets/about.svg";

const Improvall = () => {
  return (
    <div className="h-full w-full bg-[#111111]">
      <div className="brightness-[0.3]">
          <Image className=" object-fill h-[100%] w-[100vw]" src={aboutSvg} alt="/" />
      </div>
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
      <div className="max-w-[1240px] grid gap-6 w-full h-auto pt-2 m-auto">
        <div>
          <h3 className="uppercase tracking-wide text-[#ffffff]">
            Programming Languages and Technologies
          </h3>
          <div className="gap-6 flex grid-cols-5 md:grid-cols-5 sm:3 items-center">
            <div className="bg-[#bb86fc] p-3 hover:scale-105 rounded-xl text-center">
              <h2 className="text-black">Dart</h2>
            </div>
            <div className="bg-[#bb86fc] p-3 hover:scale-105 rounded-xl text-center">
              <h2 className="text-black">Flutter</h2>
            </div>
            <div className="bg-[#bb86fc] p-3 hover:scale-105 rounded-xl text-center">
              <h2 className="text-black">Firebase</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Improvall;
