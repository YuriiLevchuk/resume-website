import React from 'react'

interface AboutProps {
  setNavigatedPage: React.Dispatch<React.SetStateAction<number>>
}
const About:React.FC<AboutProps> = ( {setNavigatedPage} : AboutProps ) => {
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

      <h2>My Skills</h2>
      <div className='columnWrapper'>
        <div>
          <h3>
            <span>
              <a>Front-End</a>
              <img src="icons\html.svg" />
            </span>
          </h3>
          <ul>
            <li>React.js</li>
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>OpenGL</li>
            <li>Tailwind</li>
          </ul>
        </div>
        <div>
          <h3><span>
            <a>Back-End</a>
            <img src="icons\server.svg" />
          </span></h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Typescript</li>
            <li>AWS</li>
          </ul>
        </div>
        <div>
          <h3><span>
            Data Bases
            <img src="icons\database.svg" />
          </span></h3>
          <ul>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>Oracle</li>
            <li>MySQL</li>
          </ul>
        </div>
        <div>
          <h3><span>
            Other
            <img src="icons\database.svg" />
          </span></h3>
          <ul>
            <li>Git</li>
            <li>Figma</li>
          </ul>
        </div>
      </div>
      <p>Also I love experimenting with new tools and applying them in projects like&nbsp;
        <a 
        onClick={() => setNavigatedPage(2)}
        style={{cursor: 'pointer', color: 'var(--highlight2-color)', textDecoration: 'underline'}}>
          these…
        </a>
      </p>
      <div style={{marginTop: '20px'}} className="seperator"></div>

      <h2>I am open for:</h2>
      <p>Work:</p>
      <p>Freelance:</p>
    </div>
  )
}

export default About