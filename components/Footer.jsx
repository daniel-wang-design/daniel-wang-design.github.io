import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

export const Footer = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto  w-full ">
        <div className="flex justify-center ">
          <Link href="/">
            <div className="bg-[#eef0f1] p-4 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
