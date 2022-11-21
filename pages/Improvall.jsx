import React from "react";
import Image from "next/image";
import netflixImg from "../public/assets/projects/netflix.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import improvall1 from "../public/assets/projects/improvall-1.png";
import "semantic-ui-css/semantic.min.css";
import { List } from "semantic-ui-react";
import improvallCover from "../public/assets/projects/improvall-cover.png";
import { TypeAnimation } from "react-type-animation";
import { BsChevronLeft } from "react-icons/bs";
import googlePlayBadge from "../public/assets/projects/google-play-badge.png";

const Improvall = () => {
  return (
    <div className="h-full w-full bg-[#111111]">
      <div className="brightness-[0.2]">
        <Image
          className="object-fill h-[100%] w-[100%]"
          src={improvallCover}
          alt="/"
        />
      </div>
      <div
        className="absolute top-[10vh] left-[10vw] lg:top-[30%]
      lg:left-[10%] sm:top-[10vh] sm:left-[10%] md:top-[30vh] md:left-[10%]"
      >
        <TypeAnimation
          sequence={["IMPROVALL", 2000]}
          className="text-[10vw] py-4 tracking-widest text-[#bb86fc]"
          cursor={true}
          repeat={0}
          speed={10}
        />
      </div>
      <div className="p-8 max-w-[1240px] m-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        <div className="col-span-2">
          <h1 className="uppercase tracking-wide pt-16 text-[#bb86fc]">
            Improvall
          </h1>
          <p className="py-2 text-[#ffffff]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            euismod ex at nulla convallis, ut pellentesque justo pulvinar. Nam
            vestibulum sit amet enim sed fermentum. Praesent at consequat sapien
          </p>
          <div className="items-center m-auto lg:w-[15vw] md:w-[30vw] sm:w-[30vw] pt-16">
            <Link
              href="https://play.google.com/store/apps/details?id=ca.improvall.android"
              target={"_blank"}
            >
              <Image className="object-fill" src={googlePlayBadge} alt="/" />
            </Link>
          </div>
        </div>
        <div className="p-16 w-[80vw] lg:w-[30vw] md:w-[30vw] sm:w-[30vw]">
          <Image
            className="rounded-xl object-scale-down"
            src={improvall1}
            alt="/"
          />
        </div>
      </div>
      <div className="p-8 max-w-[1240px] grid gap-6 w-full h-auto pt-2 m-auto">
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
      <div className="w-full pb-8 pt-16">
        <div className="max-w-[1240px] m-auto  w-full ">
          <div className="flex justify-center ">
            <Link href="/">
              <div className="bg-[#bb86fc] p-4 duration-300 ease-in rounded-full cursor-pointer hover:scale-110">
                <BsChevronLeft className="text-[#000000]" size={30} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Improvall;
