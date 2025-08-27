import React from "react"
interface NavBarProps{
  navigatedPage: number,
  setNavigatedPage: React.Dispatch<React.SetStateAction<number>>
}


const NavBar:React.FC<NavBarProps> = ( {navigatedPage, setNavigatedPage} : NavBarProps ) => {
  return (
    <div className="navBar">
            <button className={"navButton" + (navigatedPage === 0 ? " active" : "")}
            id="0" title="About" name='About' 
            onClick={() => setNavigatedPage(0)}>
              <img src="icons\about.svg" className='navIcon'/>
            </button>

            <button className={"navButton" + (navigatedPage === 1 ? " active" : "")}
            id="1" name="Resume" 
            onClick={() => setNavigatedPage(1)}>
              <img src="icons\resume.svg" className='navIcon'/>
            </button>

            <button className={"navButton" + (navigatedPage === 2 ? " active" : "")}
            id="2" name="Projects" 
            onClick={() => setNavigatedPage(2)}>
              <img src="icons\projects.svg" className='navIcon'/>
            </button>

            <button className={"navButton" + (navigatedPage === 3 ? " active" : "")}
             id="3" name="Blog" 
             onClick={() => setNavigatedPage(3)}>
              <img src="icons\blog.svg" className='navIcon'/>
            </button>

            <button className={"navButton" + (navigatedPage === 4 ? " active" : "")}
            id="4" name="Contacts" 
            onClick={() => setNavigatedPage(4)}>
              <img src="icons\contacts.svg" className='navIcon'/></button>
          </div>
  )
}

export default NavBar;