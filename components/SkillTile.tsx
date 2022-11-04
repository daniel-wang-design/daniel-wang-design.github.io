import React from "react";
import Image from "next/image";

export const SkillTile = ({ image, text }) => {
  return (
    <div className="bg-[#f6fbff] p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
      <div className="grid items-center justify-center gap-4">
        <div className="m-auto">
          <Image src={image} width="64" height="64" alt="/" />
        </div>
        <h2>{text}</h2>
      </div>
    </div>
  );
};

export default SkillTile;
