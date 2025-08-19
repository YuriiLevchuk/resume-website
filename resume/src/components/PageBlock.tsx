import React from "react";

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
        return <div>About</div>
      case 1:
        return <div>Resume</div>
      case 2:
        return <div>Projects</div>
      case 3:
        return <div>Blog</div>
      case 4:
        return <div>Contacts</div>
    }
  }
  return (
    <div className="pageBlock">
      {renderPage(navigatedPage)}
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>
      <p>a</p>

    </div>
  )
}

export default PageBlock;