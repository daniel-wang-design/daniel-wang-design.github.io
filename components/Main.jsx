import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

export const Main = () => {
  const textColor = "#bb86fc";
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-[#ffffff]">
            Hey, I&apos;m&nbsp;
            <span className={`text-[${textColor}] tracking-wide`}>Daniel</span>
          </h1>
          <TypeAnimation
            sequence={[
              "Computer Science",
              2000,
              "University of Waterloo",
              2000,
            ]}
            className="text-3xl sm:text-4xl py-4 tracking-wide text-[#ffffff]"
            cursor={true}
            repeat={Infinity}
            speed={20}
            deletionSpeed={20}
          />
          <p className="py-4 text-[#ffffff] max-w-[70%] m-auto">
            I&apos;m a Full-Stack programmer specializing in
            productivity-related apps.
          </p>
          <div className="flex items-center justify-between max-w-[300px] m-auto py-4">
            <Link
              className="text-[#000000]"
              href="https://www.linkedin.com/in/danielwang04/"
              target={"_blank"}
            >
              <div
                className={`bg-[${textColor}] p-4 duration-300 ease-in rounded-xl cursor-pointer hover:scale-110`}
              >
                <FaLinkedinIn />
              </div>
            </Link>
            <Link
              className="text-[#000000]"
              href="https://github.com/daniel-wang-design"
              target={"_blank"}
            >
              <div
                className={`bg-[${textColor}] p-4 duration-300 ease-in rounded-xl cursor-pointer hover:scale-110`}
              >
                <FaGithub />
              </div>
            </Link>
            <Link
              className="text-[#000000]"
              href="mailto:daniel.wang04@hotmail.com"
              target={"_blank"}
            >
              <div
                className={`bg-[${textColor}] p-4 duration-300 ease-in rounded-xl cursor-pointer hover:scale-110`}
              >
                <AiOutlineMail />
              </div>
            </Link>
            <a href="/Resume.pdf" target="_blank">
              <div
                className={`bg-[${textColor}] p-4 duration-300 ease-in rounded-xl cursor-pointer hover:scale-110`}
              >
                <BsFillPersonLinesFill />
              </div>
            </a>
            {/* <Link className="text-[#000000]" href="/Resume.pdf" target={"_blank"}>
              <div
                className={`bg-[${textColor}] p-4 duration-300 ease-in rounded-xl cursor-pointer hover:scale-110`}
              >
                <BsFillPersonLinesFill />
              </div>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};
