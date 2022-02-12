import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";


export default function Result(props){
    if (props.results){
    return (
    <div className="Result text-start m-3">
        <h2> {props.results.word} </h2>
        
        <section>
            {props.results.phonetics.map(function(phonetic,index){
            return(
                <div key={index}>
                    <Phonetics phonetic={phonetic}/>
                </div>
            )
        })}
        </section>
        <section>
        {props.results.meanings.map(function(meaning,index){
            return(
                <div key={index}>
                    <Meaning meaning={meaning}/>
                </div>
            )
        })}
        </section>
    </div>
    )
    }else {
        return null;
    }
    
}