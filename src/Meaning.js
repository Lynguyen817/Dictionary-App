import React from "react";

export default function Meaning(props){
    console.log(props.meaning);
    return (
      <div className="Meaning">
        <h4><em>noun</em></h4>
          <h3> {props.meaning.partOfSpeed} </h3>
          {props.meaning.definitions.map(function(definition,index){
              return(
                  <div key={index}>
                      <ul>
                          <li>{definition.definition}</li>
                          <br/>
                          <em>Example: {definition.example}</em>
                          
                      </ul>
                  </div>
              );
          })}
      </div>
    );
}