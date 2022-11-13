import React from "react";
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

export function Skills() {
  return (
    <div id="skills" className="w-full p-2 lg:h-screen">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <h1 className="tracking-wide uppercase text-[#bb86fc]">Skills</h1>
        <h2 className="py-4 text-[#ffffff]">Programming Languages</h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <SkillTile image={dartImg} text="Dart" />
          <SkillTile image={cssImg} text="CSS" />
          <SkillTile image={htmlImg} text="HTML" />
          <SkillTile image={jsImg} text="JavaScript" />
          <SkillTile image={javaImg} text="Java" />
          <SkillTile image={pythonImg} text="Python" />
        </div>
        <h2 className="py-4 text-[#ffffff]">Technologies</h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <SkillTile image={awsImg} text="AWS S3" />
          <SkillTile image={firebaseImg} text="Firebase" />
          <SkillTile image={reactImg} text="React" />
          <SkillTile image={flutterImg} text="Flutter" />
          <SkillTile image={nextjsImg} text="NextJS" />
          <SkillTile image={tailwindImg} text="Tailwind" />
          <SkillTile image={boltImg} text="Bolt SDK" />
          <SkillTile image={githubImg} text="GitHub" />
        </div>
      </div>
    </div>
  );
}
