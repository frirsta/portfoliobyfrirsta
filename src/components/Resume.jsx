import React from "react";
import SkillGrid from "./SkillGrid";
import EducationExperience from "./EducationExperience";

const Resume = () => {
  return (
    <section id="resume">
      <div className="container">
        <div className="flex flex-col-reverse min-[992px]:flex-row justify-between">
          <SkillGrid />
          <EducationExperience />
        </div>
      </div>
    </section>
  );
};

export default Resume;
