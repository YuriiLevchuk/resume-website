import React from "react"
interface NavBarProps{
  setNavigatedPage: React.Dispatch<React.SetStateAction<number>>;
}



const NavBar:React.FC<NavBarProps> = ( props ) => {
  return (
    <div className="navBar">
            <button className='navButton active' id="0" title="About" name='About' onClick={() => props.setNavigatedPage(0)}>
              <img src="icons\about.svg" className='navIcon'/></button>
            <button className='navButton' id="1" name="Resume" onClick={() => props.setNavigatedPage(1)}>
              <img src="icons\resume.svg" className='navIcon'/></button>
            <button className='navButton' id="2" name="Projects" onClick={() => props.setNavigatedPage(2)}>
              <img src="icons\projects.svg" className='navIcon'/></button>
            <button className='navButton' id="3" name="Blog" onClick={() => props.setNavigatedPage(3)}>
              <img src="icons\blog.svg" className='navIcon'/></button>
            <button className='navButton' id="4" name="Contacts" onClick={() => props.setNavigatedPage(4)}>
              <img src="icons\contacts.svg" className='navIcon'/></button>
          </div>
  )
}

export default NavBar;