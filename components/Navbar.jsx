import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill, BsWindowSidebar } from "react-icons/bs";
import logo from "../public/assets/navLogo.png";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  });
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] bg-[#000000]"
          : "fixed w-full h-20 z-[100] bg-[#000000]"
      }
    >
      <div className="flex items-center justify-between w-full h-full px-2 2xl:px-16">
        <Image className="" src={logo} alt="/" width="50" height="50" />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="#about" scroll={false}>
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="#skills" scroll={false}>
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="#projects" scroll={false}>
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="cursor-pointer md:hidden">
            <AiOutlineMenu className="text-[#ffffff]" size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed top-0 left-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#000000] p-10 ease-in duration-500"
              : "fixed left-[-100%] p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex items-center justify-between w-full">
              <Image src={logo} width="87" height="35" alt="/" />
              <div
                onClick={handleNav}
                className="p-3 rounded-full shadow-lg cursor-pointer "
              >
                <AiOutlineClose size={25}  className="text-[#ffffff]"/>
              </div>
            </div>
            <div className="my-4"></div>
          </div>
          <div className="flex flex-col py-4">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm text-[#ffffff]">
                  Home
                </li>
              </Link>
              <Link href="#about" scroll={false}>
                <li onClick={() => setNav(false)} className="py-4 text-sm text-[#ffffff]">
                  About
                </li>
              </Link>
              <Link href="#skills" scroll={false}>
                <li onClick={() => setNav(false)} className="py-4 text-sm text-[#ffffff]">
                  Skills
                </li>
              </Link>
              <Link href="#projects" scroll={false}>
                <li onClick={() => setNav(false)} className="py-4 text-sm text-[#ffffff]">
                  Projects
                </li>
              </Link>
            </ul>
            <div className="pt-[20%]">
              <p className="uppercase tracking-widest text-[#ffffff]">
                Connect with Me!
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="bg-[#5651e5] p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer hover:scale-105">
                  <FaLinkedinIn className="text-[#ffffff]" />
                </div>
                <div className="bg-[#5651e5] p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer hover:scale-105">
                  <FaGithub className="text-[#ffffff]" />
                </div>
                <div className="bg-[#5651e5] p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer hover:scale-105">
                  <AiOutlineMail className="text-[#ffffff]" />
                </div>
                <div className="bg-[#5651e5] p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer hover:scale-105">
                  <BsFillPersonLinesFill className="text-[#ffffff]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
