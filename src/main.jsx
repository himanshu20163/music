import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PlayerContextprovider from './context/PlayerContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PlayerContextprovider>
    <App />
    </PlayerContextprovider>
    
  </StrictMode>,
)
