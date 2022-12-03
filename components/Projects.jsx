import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import improvallImg from "../public/assets/projects/improvall-cover.png";
import ProjectItem from "./ProjectItem";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import netflixImg from "../public/assets/projects/netflix.jpg";
import twitchImg from "../public/assets/projects/twitch.jpg";
import pollappImg from "../public/assets/projects/pollapp-cover.png";
import websiteImg from "../public/assets/projects/website-cover.png";
import focusyouthImg from "../public/assets/projects/focusyouth-cover.png";
import AOS from "aos";
import "aos/dist/aos.css";

export const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  });
  return (
    <div id="projects" className="w-full pt-8">
      <div className="max-w-[1240px] mx-auto px-2">
        <h1
          data-aos="fade-right"
          className="pb-6 tracking-wide uppercase text-[#bb86fc]"
        >
          Projects
        </h1>
        <p data-aos="fade-right" className="text-white pb-12">
          Below is a showcase of some of my past projects. Hover over each image
          to learn more!
        </p>
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
            <div data-aos="fade-up" className="">
              <ProjectItem
                title="Slack Polling App"
                backgroundImg={pollappImg}
                projectURL="/slackapp"
                text="BoltSDK | Java | AmazonS3"
              />
            </div>
            <div data-aos="fade-right">
              <h2 className="pb-2 tracking-wide text-[#bb86fc]">
                Slack Polling App
              </h2>
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
            <div data-aos="fade-up" className="">
              <ProjectItem
                title="Personal Website"
                backgroundImg={websiteImg}
                projectURL="/personalwebsite"
                text="NextJS | JS | TailwindCSS"
              />
            </div>
            <div data-aos="fade-right">
              <h2 className="pb-2 tracking-wide text-[#bb86fc]">
                Personal Website
              </h2>
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
            <div data-aos="fade-up" className="">
              <ProjectItem
                title="FOCUS Youth Website"
                backgroundImg={focusyouthImg}
                text="HTML | CSS | JS"
                projectURL="/focusyouth"
              />
            </div>
            <div data-aos="fade-right">
              <h2 className="pb-2 tracking-wide text-[#bb86fc]">FOCUS Youth</h2>
              <p className="text-white pt-4">
                dflskj slfkjwoj lskjfsldkjf slkjf dslfk d sljwfopjdslf jfea
                dskjs dflkjds lj lfjfdsadflskj slfkjwoj lskjfsldkjf slkjf dslfk
                d sljwfopjdslf jfea dskjs dflkjds lj lfjfdsadflskj slfkjwoj
                lskjfsldkjf slkjf dslfk d sljwfopjdslf jfea dskjs dflkjds lj
                lfjfdsa
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
