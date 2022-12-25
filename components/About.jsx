import React, { useEffect } from "react";
import Image from "next/image";
import profile from "../public/assets/profile.png";
import AOS from "aos";
import "aos/dist/aos.css";

export const About = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  });
  return (
    <div
      id="about"
      className="flex items-center w-full lg:pt-[500px] pt-16 md:h-screen"
    >
      <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8 p-6 lg:p-0">
        <div data-aos="fade-right" className="col-span-2">
          <h1 className="uppercase tracking-wide text-[#bb86fc]">About Me</h1>
          <p className="py-2 text-[#ffffff] leading-8">
            Hi, I&apos;m Daniel Wang and I am a first year{" "}
            <b>Computer Science </b>
            Student at the <b>University of Waterloo</b> ! In my free time, I
            enjoy taking part in initiatives that push for social change. Aside
            from a student, I&apos;m also:
          </p>
          <div className="pl-8">
            <ul className="list-disc list-inside pointer-events-none leading-10 text-[#ffffff]">
              <li>
                <b>Founder </b>
                of FOCUS Youth Organization, a youth-run Canadian charity.
              </li>
              <li>
                <b>Council Member </b> of the University of Waterloo&apos;s
                Youth and Innovation Project.
              </li>
              <li>
                <b>At-large member </b> of the Elections and Referenda Committe
                at the University of Waterloo.
              </li>
              <li>
                <b>Undergraduate Representative </b> of the Math Endowment
                Fund&apos;s Funding Council.
              </li>
            </ul>
          </div>
        </div>
        <div data-aos="fade-up" className=" w-[80%] pt-16 h-auto m-auto ">
          <Image
            className="rounded-xl duration-300 ease-in hover:scale-105 w-[80%]"
            src={profile}
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};
