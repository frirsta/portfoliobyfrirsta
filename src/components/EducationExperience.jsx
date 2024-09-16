import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScaleIn } from "./Animations";

const educationData = [
  {
    period: "July 2022 - June 2023",
    institution: "Code Institute",
    degree: "Diploma in Full Stack Software Development",
  },
];

const experienceData = [
  {
    period: "Mars 2024 - Present",
    position: "IT Consultant",
    company: "DevDonna Stockholm",
  },
  {
    period: "August 2023 - February 2024",
    position: "App Developer",
    company: "Molnify Stockholm",
  },
];

const Section = ({ title, items, renderItem }) => (
  <Card className="bg-gray-900 text-white mb-8 border-none">
    <CardHeader>
      <CardTitle className="text-2xl font-extralight tracking-wide">
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <hr className="border-white/30 my-4" />
      {items.map((item, index) => (
        <div key={index} className="mb-4 last:mb-0">
          {renderItem(item)}
          <hr className="border-white/30 my-4" />
        </div>
      ))}
    </CardContent>
  </Card>
);

const EducationExperience = () => {
  return (
    <div className="w-full min-[992px]:max-w-md mx-auto">
      <ScaleIn>
        <Section
          title="EDUCATION"
          items={educationData}
          renderItem={(item) => (
            <div className="flex justify-between items-baseline">
              <div className="text-white/50 text-xs tracking-tight">
                {item.period}
              </div>
              <div className="text-right">
                <div className="text-lg font-normal tracking-wide">
                  {item.institution}
                </div>
                <div className="text-white/50 text-xs tracking-tight w-full">
                  {item.degree}
                </div>
              </div>
            </div>
          )}
        />
      </ScaleIn>
      <ScaleIn>
        <Section
          title="EXPERIENCE"
          items={experienceData}
          renderItem={(item) => (
            <div className="flex justify-between items-baseline">
              <div className="text-white/50 text-xs tracking-tight">
                {item.period}
              </div>
              <div className="text-right">
                <div className="text-lg font-normal tracking-wide">
                  {item.position}
                </div>
                <div className="text-white/50 text-xs tracking-tight">
                  {item.company}
                </div>
              </div>
            </div>
          )}
        />
      </ScaleIn>
    </div>
  );
};

export default EducationExperience;
