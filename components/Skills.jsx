import React from "react";
import image1 from "../public/assets/skills/aws.png";
import image2 from "../public/assets/skills/css.png";
import image3 from "../public/assets/skills/firebase.png";
import image4 from "../public/assets/skills/github1.png";
import image5 from "../public/assets/skills/html.png";
import image6 from "../public/assets/skills/javascript.png";
import image7 from "../public/assets/skills/mongo.png";
import image8 from "../public/assets/skills/react.png";
import SkillTile from "./SkillTile";

export function Skills() {
  return (
    <div id="skills" className="w-full p-2 lg:h-screen">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">Technologies and Programming Languages</h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <SkillTile image={image1} text="AWS S3" />
          <SkillTile image={image2} text="CSS" />
          <SkillTile image={image3} text="Firebase" />
          <SkillTile image={image4} text="GitHub" />
          <SkillTile image={image5} text="HTML" />
          <SkillTile image={image6} text="JavaScript" />
          <SkillTile image={image7} text="MongoDB" />
          <SkillTile image={image8} text="React" />
        </div>
      </div>
    </div>
  );
}
