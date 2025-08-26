import React from 'react'

const About: React.FC = () => {
  return (
    <div>
      <h1>A bit about me!</h1>
      <h2>Hello, I am <span>Yurii Levchuk</span></h2>
      <p>
        Full-stack web developer experienced in building reliable, scalable, 
        and user-friendly applications. With a solid foundation in both front-end and back-end technologies, I can drive projects
         from initial concept through deployment. Beyond technical skills, I value collaboration, clear communication, and 
         adaptability - qualities that help me thrive in team-oriented and fast-paced environments.
      </p>
      <div className="seperator"></div>

      <h2>My Stack</h2>
      <div className='columnWrapper'>
        <div>
          <h3>
            <span>
              <a>Front-End</a>
              <img src="public\icons\html.svg" />
            </span>
          </h3>
          <ul>
            <li>React.js</li>
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>Tailwind</li>
          </ul>
        </div>
        <div>
          <h3><span>
            <a>Back-End</a>
            <img src="public\icons\server.svg" />
          </span></h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Typescript</li>
          </ul>
        </div>
        <div>
          <h3><span>
            Data Bases
            <img src="public\icons\database.svg" />
          </span></h3>
          <ul>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>Oracle</li>
            <li>MySQL</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About