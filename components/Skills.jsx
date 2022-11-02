import React from "react";
import image1 from "../public/assets/skills/aws.png";
import image2 from "../public/assets/skills/css.png";
import image3 from "../public/assets/skills/firebase.png";
import image4 from "../public/assets/skills/github1.png";
import image5 from "../public/assets/skills/html.png";
import image6 from "../public/assets/skills/javascript.png";
import image7 from "../public/assets/skills/mongo.png";
import image8 from "../public/assets/skills/react.png";
import Image from "next/image";

export function Skills() {
  return (
    <div className="w-full p-2 lg:h-screen">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">Technologies and Programming Languages</h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center gap-4">
              <div className="m-auto">
                <Image src={image1} width="64" height="64" alt="/" />
              </div>
              <h2>AWS S3</h2>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center gap-4 ">
              <div className="m-auto">
                <Image src={image2} width="64" height="64" alt="/" />
              </div>
              <h2>CSS</h2>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center gap-4 ">
              <div className="m-auto">
                <Image src={image3} width="64" height="64" alt="/" />
              </div>
              <h2>Firebase</h2>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center gap-4 ">
              <div className="m-auto">
                <Image src={image4} width="64" height="64" alt="/" />
              </div>
              <h2>GitHub</h2>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center gap-4 ">
              <div className="m-auto">
                <Image src={image5} width="64" height="64" alt="/" />
              </div>
              <h2>HTML</h2>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center gap-4 ">
              <div className="m-auto">
                <Image src={image6} width="64" height="64" alt="/" />
              </div>
              <h2>JavaScript</h2>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center gap-4 ">
              <div className="m-auto">
                <Image src={image7} width="64" height="64" alt="/" />
              </div>
              <h2>Mongo</h2>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center gap-4 ">
              <div className="m-auto">
                <Image src={image8} width="64" height="64" alt="/" />
              </div>
              <h2>React</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
