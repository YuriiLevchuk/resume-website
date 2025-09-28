import type React from "react";
import Employment from "../components/articles/Employment/Employment";
import Study from "../components/articles/Study/Study";
import Timeline from "../components/Timeline/Timeline";

const employments = [
  <Employment
    key="2"
    title="Freelance Frontend/Fullstack Developer"
    company="Self-employed"
    description="- Designed and developed responsive web applications using React, Next.js, Node.js, Express, MongoDB.
      - Built and deployed fullstack solutions (REST APIs, authentication, database integration).
      - Collaborated with clients to gather requirements, deliver MVPs, and implement ongoing improvements.
    "
    startDate="May 2025"
    finishDate="Present"
  />,
  <Employment
    key="1"
    title="Full-Stack Developer"
    company="Startup / E-Commerce Platform"
    description="- Refactored core backend services in Node.js, reducing API response times by up to 40%;
      - Built and optimized key UI components in React.js, improving user experience and accessibility across devices;
      - Created automated integration tests using Jest and Playwright, boosting overall deployment confidence;
      - Collaborated directly with founders and early users to iterate on features, debug edge cases, and shape the product roadmap.
    "
    startDate="January 2025"
    finishDate="May 2025"
  />,
  <Employment
    key="0"
    title="Production Worker / Quality Control"
    company="Biscuit International"
    description="- Performed packaging and quality checks, ensuring accuracy and compliance.
      - Optimized pallet transfer workflows, improving warehouse efficiency.
      - Gained experience in teamwork, process improvement, and responsibility under tight deadlines."
    startDate="June 2024"
    finishDate="December 2024"
  />
]

const studies = [
  <Study
      degree="Bachelor's degree in Computer Science"
      school="Czestochowa University of Technology, Poland"
      year="Expected 2026"
    />,
    <Study
      degree="Highschool lyceum dyploma. Specialiased Computer Science course."
      school="Rivne Regional Lyceum, Ukraine"
      year="2023"
    />
]

const Resume: React.FC = () => {
  return <div>
    <h1>My Resume</h1>
    <h2>Working History</h2>
    <Timeline content={employments}/>

    <h2>Education</h2>
    <Timeline content={studies}/>
  </div>;
};

export default Resume;