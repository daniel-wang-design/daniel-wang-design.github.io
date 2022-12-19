import React, { useEffect } from "react";
import awsImg from "../public/assets/skills/aws.png";
import cssImg from "../public/assets/skills/css.png";
import firebaseImg from "../public/assets/skills/firebase.png";
import githubImg from "../public/assets/skills/github1.png";
import htmlImg from "../public/assets/skills/html.png";
import jsImg from "../public/assets/skills/javascript.png";
import mongoImg from "../public/assets/skills/mongo.png";
import reactImg from "../public/assets/skills/react.png";
import javaImg from "../public/assets/skills/java.svg";
import pythonImg from "../public/assets/skills/python.png";
import boltImg from "../public/assets/skills/bolt.svg";
import dartImg from "../public/assets/skills/dart.png";
import SkillTile from "./SkillTile";
import flutterImg from "../public/assets/skills/flutter.png";
import tailwindImg from "../public/assets/skills/tailwind.png";
import nextjsImg from "../public/assets/skills/nextjs.png";
import mavenImg from "../public/assets/skills/maven.png";

import AOS from "aos";
import "aos/dist/aos.css";

export function Skills() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  });
  return (
    <div id="skills" className="lg:pt-[200px] pt-16 w-full p-2 lg:h-screen">
      <div className="lg:pt-48 max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <h1
          data-aos="fade-right"
          className="tracking-wide uppercase text-[#bb86fc]"
        >
          Skills
        </h1>
        <h2 data-aos="fade-right" className="py-4 text-[#ffffff]">
          Programming Languages
        </h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div data-aos="fade-up">
            <SkillTile image={dartImg} text="Dart" />
          </div>
          <div data-aos="fade-up">
            <SkillTile image={cssImg} text="CSS" />
          </div>
          <div data-aos="fade-up">
            <SkillTile image={htmlImg} text="HTML" />
          </div>
          <div data-aos="fade-up">
            <SkillTile image={jsImg} text="JavaScript" />{" "}
          </div>
          <div data-aos="fade-up">
            <SkillTile image={javaImg} text="Java" />
          </div>
          <div data-aos="fade-up">
            <SkillTile image={pythonImg} text="Python" />
          </div>
        </div>
        <h2 data-aos="fade-right" className="py-4 text-[#ffffff]">
          Technologies
        </h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div data-aos="fade-up">
            <SkillTile image={awsImg} text="AWS S3" />
          </div>
          <div data-aos="fade-up">
            <SkillTile image={firebaseImg} text="Firebase" />
          </div>
          <div data-aos="fade-up">
            <SkillTile image={reactImg} text="React" padding={0}/>
          </div>
          <div data-aos="fade-up">
            <SkillTile image={flutterImg} text="Flutter" padding={0}/>
          </div>
          <div data-aos="fade-up">
            <SkillTile image={nextjsImg} text="NextJS" padding={0}/>
          </div>
          <div data-aos="fade-up">
            <SkillTile image={tailwindImg} text="Tailwind" padding={0}/>
          </div>
          <div data-aos="fade-up">
            <SkillTile image={mavenImg} text="Maven"  padding={12}/>
          </div>
          <div data-aos="fade-up">
            <SkillTile image={boltImg} text="BoltSDK" padding={0}/>
          </div>
          <div data-aos="fade-up">
            <SkillTile image={githubImg} text="GitHub" padding={0}/>
          </div>
        </div>
      </div>
    </div>
  );
}
