import React from "react";

export default function Meaning(props){
    console.log(props.meaning);
    return (
      <div className="Meaning">
          <h4> {props.meaning.partOfSpeed} </h4>
          {props.meaning.definitions.map(function(definition,index){
              
              return(
                  <div key={index}>
                      <ul>
                          <li>{definition.definition}</li>
                          <br/>
                          <em>Example: {definition.example}</em>
                          <br/>
                          <div><em>Synonyms</em>: {definition.synonyms.map(function(synonym,index){
                              return( <span key={index}> {synonym}, </span>)
                          })}
                          </div>
                      </ul>
                  </div>
              );
          })}
      </div>
    );
}