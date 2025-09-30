import type React from "react";
import ProjectWidget from "../components/articles/ProjectWidget";

const Projects: React.FC = () => {
  return <div>
    <h1>My Projects</h1>
    <div className="projectContainer">
      <ProjectWidget 
        title="Portfolio Website ( Yeah, this one 😊)" 
        description="Single-page application (React, Next.js) – created a personal portfolio site with responsive design and SEO optimization, dynamic routing. Deployed on AWS." 
      />

      <ProjectWidget 
        title="E-commerce Storefront" 
        description="FullStack application (React, Node.js, MongoDB) – built a basic online store with product catalog, shopping cart, and order management system. Backend implemented with Express.js and MongoDB integration. Frontend developed in React using hooks and context for state management." 
      />

      <ProjectWidget 
        title="Task Manager App" 
        description="Web application (React, Node.js, PostgreSQL) – developed a task management system with user authentication, CRUD operations, and role-based access control. Backend powered by Node.js REST API, frontend with React and Material UI components." 
      />

      

      <ProjectWidget 
        title="Blog Platform" 
        description="FullStack blog (React, Express.js, MySQL) – implemented a platform for creating and editing posts, comments, and categories. Added JWT-based authentication. Frontend built with React and Redux for state management." 
      />
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
    </div>
  </div>;
};

export default Projects;