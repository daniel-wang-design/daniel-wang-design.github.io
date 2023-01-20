import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill, BsWindowSidebar } from "react-icons/bs";
import logoWhite from "../public/assets/logoWhite.png";
import logoBlack from "../public/assets/logoBlack.png";
import { SlMenu } from "react-icons/sl";
import NavbarOptions from "./NavbarOptions";


export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const textColor = "#bb86fc";

  useEffect(() => {
    const html = document.querySelector("html");
    if (nav) {
      html.style.overflow = "hidden";
    } else {
      html.style.overflow = "auto";
    }
  });
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" w-full h-20 bg-[#111111]">
      <div className="flex items-center justify-between w-full h-full px-2 2xl:px-16">
        <Image className="" src={logoWhite} alt="/" width="50" height="50" />
        <div onClick={handleNav} className="cursor-pointer">
          <SlMenu className="text-[#ffffff]" size={25} />
        </div>
      </div>
      <div
        className={
          nav ? "fixed top-0 left-0 w-full h-screen bg-[#000000]/60" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed right-0 top-0 lg:w-[30%] sm:w-[60%] md:w-[45%] h-screen bg-[#222222] p-10 ease-in duration-200"
              : "fixed right-[-100%] p-10 ease-in duration-200"
          }
        >
          <div>
            <div className="flex items-center justify-between w-full">
              <Image src={logoWhite} width="30" height="30" alt="/" />
              <div
                onClick={handleNav}
                className="p-3 rounded-full shadow-lg cursor-pointer "
              >
                <AiOutlineClose size={25} className="text-[#ffffff]" />
              </div>
            </div>
            <div className="my-4"></div>
          </div>
          <div className="flex flex-col py-4">
            <div onClick={handleNav}>
              <NavbarOptions onClick={() => setNav(false)} />
            </div>
            <div className="pt-[20%]">
              <p className="uppercase tracking-widest text-[#ffffff]">
                Connect with Me!
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <Link
                  className="text-[#000000]"
                  href="https://www.linkedin.com/in/danielwang04/"
                  target={"_blank"}
                >
                  <div
                    className={`bg-[${textColor}] p-3 duration-300 ease-in rounded-xl cursor-pointer hover:scale-110`}
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
                    className={`bg-[${textColor}] p-3 duration-300 ease-in rounded-xl cursor-pointer hover:scale-110`}
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
                    className={`bg-[${textColor}] p-3 duration-300 ease-in rounded-xl cursor-pointer hover:scale-110`}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
