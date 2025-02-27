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

  const { audioRef, track, songsData } = useContext(PlayerContext);
  console.log('track', track);


  return  (
    <div className='h-screen bg-black'>
      {
        songsData.length !== 0
          ?
          <>
            <div className='h-[90%] flex'>
              <Sidebar />
              <Display />
              {/* <Display /> */}
            </div>
            <Player />
          </>
          : null
      }

      <audio ref={audioRef} src={track?track.file:""} preload='auto'></audio>
    </div>
  )
}

export default App
