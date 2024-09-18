import React from "react";
import SkillGrid from "./SkillGrid";
import EducationExperience from "./EducationExperience";

const Resume = () => {
  return (
    <section id="resume">
      <div className="container flex items-center justify-center">
        <div className="flex flex-col-reverse min-[992px]:flex-row justify-between">
          <div className="w-full">
            <SkillGrid />
          </div>
          <EducationExperience />
        </div>
      </div>
    </section>
  );
};

export default Resume;
