import { useState } from 'react';

import Background from './components/Background';
import InfoBlock from './components/InfoBlock';
import PageBlock from './components/PageBlock';
import NavBar from './components/NavBar';

const App = () => {
  const [navigatedPage, setNavigatedPage] = useState(0);
  
  return (
    <>
      <Background/>
      <div className="bodyContainer">
        <div className='infoColumn'>
          <InfoBlock/>
          <NavBar setNavigatedPage={setNavigatedPage}/>
        </div>
        <div className='pageColumn'>
          <PageBlock navigatedPage={navigatedPage}/>
        </div>
      </div>
      
      
      
    </>
  )
}

export default App
