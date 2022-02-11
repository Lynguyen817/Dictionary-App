import React from "react";
import ReactAudioPlayer from "react-audio-player";



export default function Phonetics(props){
    return(
        <div className="Phonetics mt-3"> 
            <div className="ms-2 fs-4"> <em>'{props.phonetic.text}'</em></div>
            <ReactAudioPlayer
               src={props.phonetic.audio}
               autoPlay
               controls
             />
            
        </div>

    )
}