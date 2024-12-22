import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const Displayalbum = () => {

    const {id} = useParams()
    const alumbdata = albumsData[id]
    const {playWithid} = useContext(PlayerContext)
    console.log(alumbdata);
  return (
    <div>
      <Navbar />
      <div className='mt-10 flex gap-8 flex-col md:flex-row items-end'>
        <img className='w-48 rounded' src={alumbdata.image} alt="" />
         <div className='flex flex-col'>
            <p>PlayList</p>
            <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{alumbdata.name}</h2>
            <h4>{alumbdata.desc}</h4>
            <p className='mt-1'>
               <img className='inline-block px-3' src={assets.spotify_logo} alt="" />
               <b>Spotify</b>
               .1,32,154 Likes
               .<b>50 songs ,</b>
               about 2 hr 30 min
            </p>
         </div>
      </div>

      <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
         <p><b className='mr-4 '>#</b>Title</p>
         <p>Album</p>
         <p className='hidden sm:block'>Date Added</p>
         <img className='m-auto w-4' src={assets.clock_icon} alt='' />
      </div>
      <hr />
      {
        songsData.map((item,index)=>(
           <div onClick={()=>playWithid(item.id)} key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b]'>
               <p className='text-white'>
                   <b className='mr-4 text-[#a7a7a7]'>{index+1}</b>
                   <img className='inline w-10 mr-5' src={item.image} alt="" />
                   {item.name}
               </p>
               <p className='text-[15px]'>{alumbdata.name}</p>
               <p className='text-[15px] hidden sm:block'>5 days ago</p>
               <p className='text-[15px] text-center'>{item.duration}</p>
            </div>
        ))
      }
    </div>
  )
}

export default Displayalbum
