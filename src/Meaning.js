import React from "react";

export default function Meaning(props){

    return (
      <div className="Meaning mt-4">
          <h3>{props.meaning.partOfSpeech}</h3>
          {props.meaning.definitions.map(function(definition,index){
              
              return(
                  <div key={index}>
                          <p>
                            {definition.definition} 
                          </p>
                          <em><strong>Example:</strong>{definition.example}</em>
                          <br/>
                          <div>
                              <em><strong>Synonyms:</strong></em> 
                              {definition.synonyms.map(function(synonym,index){
                              return( <span key={index}> {synonym}, </span>)
                          })}
                          </div> 
                      
                  </div>
              );
          })}
      </div>
    );
}