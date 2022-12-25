import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import improvallImg from "../public/assets/projects/improvall-cover.png";
import ProjectItem from "./ProjectItem";
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
          to learn more! Learn more about some of my coding experience and my
          participation in various Hackathons on{" "}
          <a
            href="https://github.com/daniel-wang-design"
            rel="noreferrer"
            target={"_blank"}
            className="text-[#bb86fc]"
          >
            GitHub
          </a>
          !
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
                A productivity mobile app created for both Android and iOS
                devices. Previously available for both iOS and Android users,
                now only available on the Google Play Store. Generated over $150
                in revenue.
              </p>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div data-aos="fade-up" className="">
              <ProjectItem
                title="FOCUS Youth User Portal"
                backgroundImg={focusyouthImg}
                text="MongoDB | Express | React | NodeJS"
                projectURL="/focusyouth"
              />
            </div>
            <div data-aos="fade-right">
              <h2 className="pb-2 tracking-wide text-[#bb86fc]">
                MERN App: User Portal
              </h2>
              <p className="text-white pt-4">
                A full-stack app using the MERN Stack created for FOCUS Youth
                Organization. Allows FOCUS Youth executives, tutors, and
                volunteers to sign in and log their volunteer hours.
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
                A poll app created for Slack depoloyed on all FOCUS Youth
                Orgaization Slack workplaces. Allows FOCUS Youth members to
                create polls free of charge, including anonymous polls and
                saving poll results for future use.
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
                My personal website showcasing some of my past projects and
                built using NextJS and TailwindCSS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
