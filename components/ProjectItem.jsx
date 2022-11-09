import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectItem = ({ title, backgroundImg, projectURL }) => {
  return (
    <div className="p-0 rounded-xl">
      <div className="relative flex items-center justify-center h-auto w-full rounded-xl group hover:bg-gradient-to-r from-[#bb86fc] to-[#6200ee]">
        <Image
          className="rounded-xl group-hover:opacity-10"
          src={backgroundImg}
          alt="/"
        />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="text-2xl tracking-wider text-center text-white">
            {title}
          </h3>
          <p className="pt-3 pb-4 text-center text-white">React JS</p>
          <Link href={projectURL}>
            <p className="py-3 text-lg font-bold text-center text-gray-700 bg-white rounded-lg cursor-pointer">
              More info
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
