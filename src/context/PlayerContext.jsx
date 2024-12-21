import { createContext, useContext, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextprovider = (props)=>{

    const audioref = useRef()
    const seekbg = useRef()
    const seekbar = useRef()

    const[track,setTrack] = useState(songsData[0])
    const[playstatus,setplaystatus] = useState(false)
    const[time,settime] = useState({
        currentTime:{
            second:0,
            minute:0
        },
        totalTime:{
            second:0,
            minute:0
        }
    })

    const play = ()=>{
        audioref.current.play();
        setplaystatus(true)
    }

    const pause = ()=>{
        audioref.current.pause();
        setplaystatus(false);
    }
    
    const contextValue = {
         audioref,
         seekbg,
         seekbar,
         track,
         setTrack,
         playstatus,
         setplaystatus,
         time,settime,
         play,pause
    }

    return(
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextprovider;