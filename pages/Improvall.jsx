import React from "react";
import Image from "next/image";
import netflixImg from "../public/assets/projects/netflix.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import improvall1 from "../public/assets/projects/improvall-1.png";
import "semantic-ui-css/semantic.min.css";
import { List } from "semantic-ui-react";
import improvallCover from "../public/assets/projects/improvall-cover.png";
import improvall2 from "../public/assets/projects/improvall-2.png";
import improvall3 from "../public/assets/projects/improvall-3.png";
import improvall4 from "../public/assets/projects/improvall-4.png";
import improvall5 from "../public/assets/projects/improvall-5.png";

import { TypeAnimation } from "react-type-animation";
import { BsChevronLeft } from "react-icons/bs";
import googlePlayBadge from "../public/assets/projects/google-play-badge.png";

const Improvall = () => {
  return (
    <div className="h-full w-full bg-[#111111]">
      <div className="relative">
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
      </div>

      <div className="p-8 max-w-[1240px] m-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 md:col-span-2 col-span-2">
          <h1 className="uppercase tracking-wide pt-16 text-[#bb86fc]">
            Improvall
          </h1>
          <p className="py-2 text-[#ffffff]">
            <b>App Features:</b> 

            
            <b>About Improvall:</b>
            Improvall is a paid productivity app created
            by Improvall as part of the Junior Achievement Central Ontario
            Program. the app is no longer available on the Apple App Store but
            can still be downloaded on the Google Play Store.
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
        <div className="p-16 w-[80vw] lg:w-[25vw] md:w-[30vw] sm:w-[30vw]">
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
      <div className="p-8 max-w-[1240px] w-full h-auto pt-2 m-auto">
        <h1 className="text-[#bb86fc] tracking-wide">PRODUCT GALLERY</h1>
        <div className="gap-3 pt-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
          <Image
            className="rounded-xl object-fill w-[100vw] hover:scale-105"
            src={improvall2}
            alt="/"
          />
          <Image
            className="rounded-xl object-fill w-[100vw] hover:scale-105"
            src={improvall3}
            alt="/"
          />
          <Image
            className="rounded-xl object-fill w-[100vw] hover:scale-105"
            src={improvall4}
            alt="/"
          />
          <Image
            className="rounded-xl object-fill w-[100vw] hover:scale-105"
            src={improvall5}
            alt="/"
          />
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
