import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './component/Sidebar'
import Player from './component/Player'
import Navbar from './component/Navbar'
import Display from './component/Display'
import { BrowserRouter } from 'react-router-dom'
import { PlayerContext } from './context/PlayerContext'

function App() {
  const [count, setCount] = useState(0)
  
  const {audioref,track} = useContext(PlayerContext)
  console.log('track',track);
  

  return (
    <BrowserRouter>
      <div className='h-screen bg-black'>
        <div className='h-[90%] flex'>
          <Sidebar />
          <Display />
          {/* <Display /> */}
        </div>
        <Player />
        <audio ref={audioref} src={track.file} preload='auto'></audio>
      </div>
    </BrowserRouter>
  )
}

export default App
