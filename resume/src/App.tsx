import ScrollingText from './components/ScrollingText/ScrollingText'
import InfoBlock from './components/InfoBlock/InfoBlock'
import { useState } from 'react';

const App = () => {
  const [navigatedPage, setNavigatedPage] = useState(0);
  const renderPage = () => {
    switch (navigatedPage) {
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
    <>
      <div className="bodyContainer">
        <div className='infoColumn'>
          <InfoBlock/>
          <div className="navBar">
            <button onClick={() => setNavigatedPage(0)}>About</button>
            <button onClick={() => setNavigatedPage(1)}>Resume</button>
            <button onClick={() => setNavigatedPage(2)}>Projects</button>
            <button onClick={() => setNavigatedPage(3)}>Blog</button>
            <button onClick={() => setNavigatedPage(4)}>Contacts</button>
          </div>
        </div>
        <div className='pageColumn'>
          <div className='pageBlock'> 
            <ScrollingText />
            { renderPage() }
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere pulvinar euismod. Duis est lacus, placerat sed tellus vitae, viverra volutpat lorem. Aliquam posuere pellentesque posuere. In ullamcorper lectus nec est cursus auctor. Phasellus felis ex, volutpat non vehicula ac, sollicitudin eu nisl. Aliquam massa nunc, dignissim nec elit et, dignissim bibendum ipsum. Vivamus interdum justo nulla, sed maximus odio posuere sit amet. Fusce euismod sit amet libero eget pretium. Morbi non urna ornare, rutrum est nec, consequat sapien. Cras ut consectetur nisi. Proin sit amet sapien eu quam commodo consectetur ac eget eros. Nulla aliquam turpis vitae lacus fringilla, vulputate rhoncus dolor commodo. Nunc condimentum quis risus at porta. Donec mattis suscipit diam vel gravida. Nullam non diam ipsum.

Vivamus nec dui eu nibh efficitur tincidunt. Nam ut nulla nunc. In cursus massa ut urna sagittis, nec mollis urna pharetra. Vivamus lacinia diam quis justo sollicitudin, eu auctor nunc finibus. Nam lacinia nisl eget lorem facilisis luctus. Vestibulum orci nulla, dignissim nec mi eget, euismod ultrices turpis. Fusce vitae cursus urna, vitae tempus urna. Fusce semper sodales tristique. Nunc pretium, risus eu maximus pellentesque, turpis magna sagittis lorem, non finibus neque massa vel lorem. Vivamus blandit ex non nunc cursus bibendum. Pellentesque lacinia odio leo. Nullam eu lacinia lorem. Suspendisse potenti. Fusce finibus commodo nunc, non euismod magna ullamcorper id. Phasellus sodales lectus non odio lacinia porttitor.
          </div>
        </div>
      </div>
      
      
      
    </>
  )
}

export default App
