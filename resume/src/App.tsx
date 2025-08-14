import ScrollingText from './components/ScrollingText/ScrollingText'
import InfoBlock from './components/InfoBlock/InfoBlock'

const App = () => {


  return (
    <>
      <div className='infoColumn'>
        <InfoBlock/>
        <div className="navBar">
          <button>About</button>
          <button>Resume</button>
          <button>Projects</button>
          <button>Blog</button>
          <button>Contacts</button>
        </div>
      </div>
      <div className='pageColumn'>
        <ScrollingText />
      </div>
      
      
    </>
  )
}

export default App
