import Background from './components/Background';
import InfoBlock from './components/InfoBlocks/ProfileBlock';
import ProfileBlock from './components/InfoBlocks/PageBlock';
import NavBar from './components/NavBar/NavBar';

const App = () => {
  return (
    <>
      <Background/> 
      <div className="bodyContainer">
        <div className='profieColumnWrapper'>
          <InfoBlock/>
          <NavBar/>
        </div>  
        <div className='pageColumnWrapper'>
          <ProfileBlock/>
        </div>
      </div>
    </>
  )
}

export default App
