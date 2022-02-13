import React from "react";
import "./Meaning.css";

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
                          <em><span className="example">Example:</span> <span className="sentence">{definition.example}</span></em>
                          <br/>
                          <div className="synonyms">
                              <em>Synonyms:</em> 
                              {definition.synonyms.map(function(synonym,index){
                              return( <span key={index}> {synonym}, </span>)
                          })}
                          </div> 
                          </li>
                      </ul>
                  </div>
              );
          })}
      </div>
    );
}