import React, { type ReactNode } from "react";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Resume from "./Pages/Resume";
import Projects from "./Pages/Projects";
import Contacts from "./Pages/Contacts";

interface PageBlockProps {
  navigatedPage: number,
  setNavigatedPage: React.Dispatch<React.SetStateAction<number>>
}
const PageBlock: React.FC<PageBlockProps> = ( {navigatedPage, setNavigatedPage} : PageBlockProps ) => {
  const renderPage = (n: number): ReactNode => {
    switch (n) {
      case 0:
        return <About setNavigatedPage={setNavigatedPage}/>
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