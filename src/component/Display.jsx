import React, { useEffect, useRef } from 'react'
import {Route,Routes, useLocation} from 'react-router-dom'
import DisplayHome from './DisplayHome'
import Displayalbum from './Displayalbum'
import { albumsData } from '../assets/assets'


const Display = () => {

  const displayRef = useRef()
  const location = useLocation()
  const isAlbum = location.pathname.includes("album");

  console.log('isalbum',displayRef);
  const albumid = isAlbum ? location.pathname.slice(-1):"";
  const bgcolor = albumsData[Number(albumid)].bgColor
  console.log(bgcolor);

  useEffect(() => {
     if(isAlbum){
      displayRef.current.style.background = `linear-gradient(${bgcolor},#121212)`
     }
     else{
      displayRef.current.style.background = `#121212`
     }
  })

  return (
    <div ref={displayRef} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
        
        <Routes>
           <Route path="/" element={<DisplayHome/>} />
           <Route path="/album/:id" element={<Displayalbum/>} />
        </Routes>
    </div>
  ) 
}

export default Display;