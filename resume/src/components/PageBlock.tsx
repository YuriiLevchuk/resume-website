import React from "react";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Resume from "./Pages/Resume";
import Projects from "./Pages/Projects";
import Contacts from "./Pages/Contacts";

interface PageBlockProps {
  navigatedPage: number
}
const PageBlock:React.FC<PageBlockProps> = ( {navigatedPage} : PageBlockProps ) => {
  const renderPage = (n: number) => {
    document.getElementsByClassName('active')[0]?.classList.remove('active');

    const activeButton = document.getElementById(n.toString());
    activeButton?.classList.add('active')
    
    switch (n) {
      case 0:
        return <About/>
      case 1:
        return <Resume/>
      case 2:
        return <Projects/>
      case 3:
        return <Blog/>
      case 4:
        return <Contacts/>
    }
  }
  return (
    <div className="pageBlock">
      <div className="contentWrapper">
        {renderPage(navigatedPage)}
      </div>
    </div>
  )
}

export default PageBlock;