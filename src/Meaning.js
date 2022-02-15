import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props){

    return (
      <div className="Meaning mt-4">
          <h3>{props.meaning.partOfSpeech}</h3>
          {props.meaning.definitions.map(function(definition,index){
              
              return(
                  <div key={index}>
                      <ul>
                          <li>
                          <p className="definition">
                            {definition.definition} 
                          </p>
                          <em><span className="example"></span> <span className="sentence">{definition.example}</span></em>
                          <br/>
                          <Synonyms synonyms={definition.synonyms}/>
                          </li>
                      </ul>
                  </div>
              );
          })}
      </div>
    );
}