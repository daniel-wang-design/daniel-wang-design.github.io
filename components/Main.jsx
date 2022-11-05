import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-[#ffffff]">
            Hey, I&apos;m <span className="text-[#5651e5]">Daniel</span>
          </h1>
          <h2 className="py-4 text-[#ffffff]">Computer Science</h2>
          <p className="py-4 text-[#ffffff] max-w-[70%] m-auto">
            I&apos;m a rising programmer specializing in productivity-related
            applications.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="bg-[#5651e5] p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer  hover:scale-110">
              <Link
                className="text-[#ffffff]"
                href="https://www.linkedin.com/in/danielwang04/"
                target={"_blank"}
              >
                <FaLinkedinIn />
              </Link>
            </div>
            <div className="bg-[#5651e5] p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer hover:scale-110">
              <FaGithub className="text-[#ffffff]" />
            </div>
            <div className="bg-[#5651e5] p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer hover:scale-110">
              <AiOutlineMail className="text-[#ffffff]" />
            </div>
            <div className="bg-[#5651e5] p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer hover:scale-110">
              <BsFillPersonLinesFill className="text-[#ffffff]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
