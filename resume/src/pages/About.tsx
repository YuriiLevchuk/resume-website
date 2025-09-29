import React from 'react'
import Columns from '../components/Columns/Columns'

const skillsColumn = [
  <div>
    <h3><span>
      <a>Front-End</a>
      <img src="icons\html.svg" />
    </span></h3>
    <ul>
      <li>React.js</li>
      <li>Next.js</li>
      <li>TypeScript</li>
      <li>OpenGL</li>
      <li>Tailwind</li>
    </ul>
  </div>,
  
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
  </div>,

  <div>
    <h3><span>
      Databases
      <img src="icons\database.svg" />
    </span></h3>
    <ul>
      <li>MongoDB</li>
      <li>PostgreSQL</li>
      <li>Oracle</li>
      <li>MySQL</li>
    </ul>
  </div>,

  <div>
    <h3><span>
      Cloud
      <img src="icons\cloud.svg" />
    </span></h3>
    <ul>
      <li>AWS</li>
      <li>GSP</li>
    </ul>
  </div>,

  <div>
    <h3><span>
      Other
      <img src="icons\code.svg" />
    </span></h3>
    <ul>
      <li>Git</li>
      <li>Figma</li>
      <li>Docker</li>
    </ul>
  </div>
]

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
      <Columns content={skillsColumn}/>
      <p>Also I love experimenting with new tools and applying them in projects like&nbsp;

        <a 
        onClick={() => setNavigatedPage(2)}
        style={{cursor: 'pointer', color: 'var(--highlight2-color)', textDecoration: 'underline'}}>
          these…
        </a>
      </p>
      <div style={{marginTop: '20px'}} className="seperator"></div>

      <h2>Interested?</h2>
      <p>I am open for work, collaborations and freelance projects!</p>
      <p>Check out my resume and projects! Feel free to get in touch.</p>
      <button className="button"
      onClick={() => setNavigatedPage(4)}>
        Contacts
      </button>
    </div>
  )
}

export default About