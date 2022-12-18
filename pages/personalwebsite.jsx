import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import improvall1 from "../public/assets/projects/improvall-1.png";
import "semantic-ui-css/semantic.min.css";
import improvallCover from "../public/assets/projects/improvall-cover.png";
import improvall2 from "../public/assets/projects/improvall-2.png";
import improvall3 from "../public/assets/projects/improvall-3.png";
import improvall4 from "../public/assets/projects/improvall-4.png";
import improvall5 from "../public/assets/projects/improvall-5.png";
import { TypeAnimation } from "react-type-animation";
import { BsChevronLeft } from "react-icons/bs";
import googlePlayBadge from "../public/assets/projects/google-play-badge.png";
import personalwebsite1 from "../public/assets/projects/personalwebsite1.png";
import github from "../public/assets/projects/github.png";
import websiteCover from "../public/assets/projects/website-cover.png";

const personalwebsite = () => {
  return (
    <div className="h-full w-full bg-[#111111]">
      <div className="relative">
        <div className="brightness-[0.5]">
          <Image
            className="object-fill h-[100%] w-[100%] blur-sm"
            src={websiteCover}
            alt="/"
          />
        </div>
        <div
          className="absolute top-[10vh] left-[10vw] lg:top-[30%]
      lg:left-[10%] sm:top-[10vh] sm:left-[10%] md:top-[30vh] md:left-[10%]"
        >
          <TypeAnimation
            sequence={["WEBSITE", 2000]}
            className="text-[10vw] py-4 tracking-widest text-[#bb86fc] "
            cursor={true}
            repeat={0}
            speed={10}
          />
        </div>
      </div>
      <div className="p-8 max-w-[1240px] m-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 content-center">
        <div className="lg:col-span-3 md:col-span-2 col-span-2">
          <h1 className="uppercase tracking-wide text-[#bb86fc]">
            My Personal Website
          </h1>
          <p className="py-2 text-[#ffffff] leading-8">
            This is my personal website showcasing some of my coding
            experiences. All code for the website was written from scratch using
            React and Tailwind CSS. The website is hosted using Vercel.
          </p>
          <br />

          <p className="py-2 text-[#ffffff] leading-8">
            Website credits: All images are either copyright free, or produced
            by myself. Special thanks to Angelina Zhou (
            {
              <Link
                className="inline-block text-[#bb86fc]"
                href="https://www.instagram.com/angielligraphy/"
                target="_blank"
              >
                @angielligraphy
              </Link>
            }
            ) for designing the navbar logo.
          </p>

          <div>
            <p className="text-[#ffffff] leading-8 text-center">
              View on GitHub:
            </p>
            <div
              className="m-auto bg-[#bb86fc] rounded-xl p-4 hover:scale-105 
            lg:w-[15vw] md:w-[30vw] sm:w-[30vw]"
            >
              <Link
                href="https://github.com/daniel-wang-design/daniel-wang-design.github.io"
                target={"_blank"}
              >
                <Image className="object-fill" src={github} alt="/" />
              </Link>
            </div>
          </div>
          <div className="pt-32 m-auto">
            <h3 className="uppercase tracking-wide text-[#ffffff]">
              Programming Languages and Technologies
            </h3>
            <div className="gap-6 md:lg:flex grid grid-rows-3">
              <div className="bg-[#bb86fc] p-3 hover:scale-105 rounded-xl text-center">
                <h2 className="text-black">React</h2>
              </div>
              <div className="bg-[#bb86fc] p-3 hover:scale-105 rounded-xl text-center">
                <h2 className="text-black">Tailwind CSS</h2>
              </div>
              <div className="bg-[#bb86fc] p-3 hover:scale-105 rounded-xl text-center">
                <h2 className="text-black">JavaScript</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="p-8 w-[80vw] lg:w-[25vw] md:w-[30vw] sm:w-[30vw]">
          <div className="bg-[#bb86fc] rounded-xl p-[1px] hover:scale-105">
            <Image
              className="rounded-xl object-scale-down"
              src={personalwebsite1}
              alt="/"
            />
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

export default personalwebsite;
