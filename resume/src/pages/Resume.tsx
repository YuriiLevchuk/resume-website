import type React from "react";
import Employment from "./articles/Employment";
import Study from "./articles/Study";

const Resume: React.FC = () => {
  return <div>
    <h1>My Resume</h1>

    <h2>Working History</h2>
    <Employment
      title="Full-Stack Developer"
      company="Startup / E-Commerce Platform"
      description="Developed a web application using React.js and Next.js"
      startDate="JANUARY 2025"
      finishDate="MAY 2025"
    />
    <Employment
      title="Production Worker / Quality Control"
      company="Biscuit International"
      description="Performed packaging and quality checks, ensuring accuracy and compliance.
        Optimized pallet transfer workflows, improving warehouse efficiency.
        Gained experience in teamwork, process improvement, and responsibility under tight deadlines."
      startDate="JUNE 2024"
      finishDate="DECEMBER 2024"
    />

    <h2>Education</h2>
    <Study
      degree="Bachelor's degree in Computer Science"
      school="Czestochowa University of Technology"
      year="Expected 2026"
    />
    <Study
      degree="Highschool lyceum dyploma. Specialiased Computer Science course."
      school="Rivne Regional Lyceum"
      year="2023"
    />
  </div>;
};

export default Resume;