import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import improvallImg from "../public/assets/projects/improvall-cover.png";
import ProjectItem from "./ProjectItem";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import netflixImg from "../public/assets/projects/netflix.jpg";
import twitchImg from "../public/assets/projects/twitch.jpg";
import pollappImg from "../public/assets/projects/pollapp-cover.png"
import websiteImg from "../public/assets/projects/website-cover.png"
import AOS from "aos";
import "aos/dist/aos.css";

export const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  });
  return (
    <div id="projects" className="w-full pt-8">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <h1
          data-aos="fade-right"
          className="pb-2 tracking-wide uppercase text-[#bb86fc]"
        >
          Projects
        </h1>
        <div className="grid gap-8 pt-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div data-aos="fade-up" className="">
              <ProjectItem
                title="Improvall Mobile App"
                backgroundImg={improvallImg}
                projectURL="/Improvall"
                text="Flutter | Dart | Firebase"
              />
            </div>
            <div data-aos="fade-right">
              <h2 className="pb-2 tracking-wide text-[#bb86fc]">Improvall</h2>
              <p className="text-white pt-4">
                dflskj slfkjwoj lskjfsldkjf slkjf dslfk d sljwfopjdslf jfea
                dskjs dflkjds lj lfjfdsadflskj slfkjwoj lskjfsldkjf slkjf dslfk
                d sljwfopjdslf jfea dskjs dflkjds lj lfjfdsadflskj slfkjwoj
                lskjfsldkjf slkjf dslfk d sljwfopjdslf jfea dskjs dflkjds lj
                lfjfdsa
              </p>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div data-aos="fade-right">
              <h2 className="pb-2 tracking-wide text-[#bb86fc]">Slack PollApp</h2>
              <p className="text-white pt-4">
                dflskj slfkjwoj lskjfsldkjf slkjf dslfk d sljwfopjdslf jfea
                dskjs dflkjds lj lfjfdsadflskj slfkjwoj lskjfsldkjf slkjf dslfk
                d sljwfopjdslf jfea dskjs dflkjds lj lfjfdsadflskj slfkjwoj
                lskjfsldkjf slkjf dslfk d sljwfopjdslf jfea dskjs dflkjds lj
                lfjfdsa
              </p>
            </div>
            <div data-aos="fade-up" className="">
              <ProjectItem
                title="Slack Polling App"
                backgroundImg={pollappImg}
                projectURL="/"
                text="BoltSDK | Java | AmazonS3"
              />
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div data-aos="fade-up" className="">
              <ProjectItem
                title="Personal Website"
                backgroundImg={websiteImg}
                projectURL="/"
                text="NextJS | JS | TailwindCSS"
              />
            </div>
            <div data-aos="fade-right">
              <h2 className="pb-2 tracking-wide text-[#bb86fc]">Personal Website</h2>
              <p className="text-white pt-4">
                dflskj slfkjwoj lskjfsldkjf slkjf dslfk d sljwfopjdslf jfea
                dskjs dflkjds lj lfjfdsadflskj slfkjwoj lskjfsldkjf slkjf dslfk
                d sljwfopjdslf jfea dskjs dflkjds lj lfjfdsadflskj slfkjwoj
                lskjfsldkjf slkjf dslfk d sljwfopjdslf jfea dskjs dflkjds lj
                lfjfdsa
              </p>
            </div>
          </div>{" "}
          <div className="grid gap-8 md:grid-cols-2">
            <div data-aos="fade-right">
              <h3 className="pb-2 tracking-wide text-[#bb86fc]">Improvall</h3>
              <p className="text-white pt-4">
                dflskj slfkjwoj lskjfsldkjf slkjf dslfk d sljwfopjdslf jfea
                dskjs dflkjds lj lfjfdsadflskj slfkjwoj lskjfsldkjf slkjf dslfk
                d sljwfopjdslf jfea dskjs dflkjds lj lfjfdsadflskj slfkjwoj
                lskjfsldkjf slkjf dslfk d sljwfopjdslf jfea dskjs dflkjds lj
                lfjfdsa
              </p>
            </div>
            <div data-aos="fade-up" className="">
              <ProjectItem
                title="Improvall Mobile App"
                backgroundImg={improvallImg}
                projectURL="/Improvall"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
