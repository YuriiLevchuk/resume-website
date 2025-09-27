import React from "react"
import { NavLink } from "react-router-dom";
import styles from"./NavBar.module.css"

const NavBar:React.FC = () => {
  return (
    <div className={styles.navBar}>
      <NavLink className={styles.navButton} title="About" to="about">
        <img src="icons\about.svg" className={styles.navIcon}/>
      </NavLink>
      <NavLink className={styles.navButton} title="Resume" to="resume">
        <img src="icons\resume.svg" className={styles.navIcon}/>
      </NavLink>
      <NavLink className={styles.navButton} title="Projects" to="projects">
        <img src="icons\projects.svg" className={styles.navIcon}/>
      </NavLink>
      <NavLink className={styles.navButton} title="Blog" to="blog">
        <img src="icons\blog.svg" className={styles.navIcon}/>
      </NavLink>
      <NavLink className={styles.navButton} title="Contacts" to="contacts">
        <img src="icons\contacts.svg" className={styles.navIcon}/>
      </NavLink>
    </div> 
  )
}

export default NavBar;