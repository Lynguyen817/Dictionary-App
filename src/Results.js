import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Result.css";


export default function Result(props){
    if (props.results){
    return (
    <div className="Result text-start m-3">
        <h1> {props.results.word} </h1>
        
        <section>
            {props.results.phonetics.map(function(phonetic,index){
            return(
                <div key={index}>
                    <Phonetics phonetic={phonetic}/>
                </div>
            )
        })}
        </section>
        
        {props.results.meanings.map(function(meaning,index){
            return(
                <section>
                <div key={index}>
                    <Meaning meaning={meaning}/>
                </div>
                </section>
            )
        })}
    </div>
    )
    }else {
        return null;
    }
    
}