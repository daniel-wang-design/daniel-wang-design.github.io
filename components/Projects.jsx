import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import propertyImg from "../public/assets/projects/property.jpg";
import ProjectItem from "./ProjectItem";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import netflixImg from "../public/assets/projects/netflix.jpg";
import twitchImg from "../public/assets/projects/twitch.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

export const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <div id="projects" className="w-full pt-8">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <h1 className="pb-2 tracking-wide uppercase text-[#bb86fc]">
          Projects
        </h1>
        <div className="grid gap-8 pt-4 md:grid-cols-2">
          <div data-aos="fade-up">
            <ProjectItem
              title="Property Finder"
              backgroundImg={propertyImg}
              projectURL="/Improvall"
            />
          </div>
          <div data-aos="fade-up">
            <ProjectItem
              title="Crypto App"
              backgroundImg={cryptoImg}
              projectURL="/SlackApp"
            />
          </div>
          <div data-aos="fade-up">
            <ProjectItem
              title="Netflix Plugin"
              backgroundImg={netflixImg}
              projectURL="/property"
            />
          </div>
          <div data-aos="fade-up">
            <ProjectItem
              title="Twitch Add-on"
              backgroundImg={twitchImg}
              projectURL="/property"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
