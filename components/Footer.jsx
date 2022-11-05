import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsChevronUp } from "react-icons/bs";

export const Footer = () => {
  return (
    <div id="contact" className="w-full pb-8">
      <div className="max-w-[1240px] m-auto  w-full ">
        <div className="flex justify-center ">
          <Link href="/">
            <div className="bg-[#5651e5] p-4 duration-300 ease-in rounded-full cursor-pointer hover:scale-110">
              <BsChevronUp className="text-[#ffffff]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
