import React, { useContext } from 'react'
import { assets, songsData } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const Player = () => {

   const {track,seekbg,seekbar,playstatus,play,pause} = useContext(PlayerContext);
   
   return (
      <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
         <div className="hidden lg:flex items-center gap-4">
            <img className='w-12' src={track.image} alt="" />
            <div>
               <p>{track.name}</p>
               <p>{track.desc.slice(0, 12)}</p>
            </div>
         </div>
         <div className='flex flex-col items-center gap-1 m-auto'>
            <div className="flex gap-4">
               <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="" />
               <img className='w-4 cursor-pointer' src={assets.prev_icon} alt="" />
               {
                  playstatus?
                  <img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt="" />
                 
                  :
                  <img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt="" />
               }
            
               <img className='w-4 cursor-pointer' src={assets.next_icon} alt="" />
               <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="" />
            </div>
            <div className='flex items-center gap-5'>
               <p>1:06</p>
               <div ref={seekbg} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                  <hr ref={seekbar} className='h-1 border-none w-10 bg-green-800 rounded-full'></hr>
               </div>
               <p>3:20</p>
            </div>
         </div>
      </div>
   )
}
//]
export default Player