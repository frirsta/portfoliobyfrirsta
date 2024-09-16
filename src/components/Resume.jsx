import React from "react";
import SkillGrid from "./SkillGrid";
import EducationExperience from "./EducationExperience";

const Resume = () => {
  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-4 flex justify-center">
        <div className="w-[902px] flex flex-col-reverse min-[992px]:flex-row justify-between">
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
