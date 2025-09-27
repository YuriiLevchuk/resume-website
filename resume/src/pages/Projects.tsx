import type React from "react";
import ProjectWidget from "./articles/ProjectWidget";

const Projects: React.FC = () => {
  return <div>
    <h1>My Projects</h1>
    <div className="projectContainer">
      <ProjectWidget title="Maze Generator App" description="Maze Generator (Python) – Designed and implemented a maze generation
        application in Python, exploring and comparing multiple algorithms for maze
        creation. Developed a user-friendly interface allowing customization of maze
        parameters. Awarded 2nd place in the regional computer science project
        competition “MAN”"/>
      <ProjectWidget title="Secure Credential Encryption App" description="Secure Credential Encryption (Python, AES) – Researched and implemented
        methods for encrypting user credentials in websites and applications, utilizing the
        AES (Advanced Encryption Standard) algorithm in Python. Focused on improving
        data security and safe storage practices. Achieved 2nd place in the regional
        computer science project competition “MAN”
        ."/>
      <ProjectWidget title="Project Widget" description="Placeholder"/>
      <ProjectWidget title="Project Widget" description="Placeholder"/>
      <ProjectWidget title="Project Widget" description="Placeholder"/>
    </div>
  </div>;
};

export default Projects;