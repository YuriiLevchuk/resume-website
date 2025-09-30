import About from "../../pages/About";
import Blog from "../../pages/Blog";
import Resume from "../../pages/Resume";
import Projects from "../../pages/Projects";
import Contacts from "../../pages/Contacts";

import { Routes, Route, Navigate } from "react-router-dom";

import styles from "./InfoBlocks.module.css"

const PageBlock: React.FC = ( ) => {

  return (
    <div className={styles.pageBlock}>
      <div className="contentWrapper">
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/resume" element={<Resume/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="*" element={<Navigate to="/about" replace/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default PageBlock;