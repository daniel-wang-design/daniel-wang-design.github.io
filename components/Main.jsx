import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="text-sm tracking-widest text-gray-600 uppercase ">
            Let&apos;s building something together.
          </p>
          <h1 className="py-4 text-gray-700">
            Hey, I&apos;m <span className="text-[#5651e5]">Daniel</span>
          </h1>
          <h1 className="py-4 text-gray-700 ">
            Computer Science <br></br> University of Waterloo
          </h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I&apos;m a rising programmer specializing in productivity-related
            applications.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
              <FaLinkedinIn />
            </div>
            <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
              <FaGithub />
            </div>
            <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
              <AiOutlineMail />
            </div>
            <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
