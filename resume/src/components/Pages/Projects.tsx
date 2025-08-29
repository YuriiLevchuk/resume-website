import type React from "react";
import ProjectWidget from "./Articles/ProjectWidget";

const Projects: React.FC = () => {
  return <div>
    <h1>My Projects</h1>
    <div className="projectContainer">
      <ProjectWidget title="Project Widget" description="Placeholder"/>
      <ProjectWidget title="Project Widget" description="Placeholder"/>
      <ProjectWidget title="Project Widget" description="Placeholder"/>
      <ProjectWidget title="Project Widget" description="Placeholder"/>
      <ProjectWidget title="Project Widget" description="Placeholder"/>
    </div>
  </div>;
};

export default Projects;