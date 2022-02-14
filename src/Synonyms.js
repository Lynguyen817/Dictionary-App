import React from "react";

export default function Synonyms(props){
    if (props.synonyms.length){
        return(
          <div className="synonyms">
               <em>Synonyms:</em> 
                   {props.synonyms.map(function(synonym,index){
                 return( <span key={index}> {synonym}, </span>)
                 })}
          </div> 
    );
    } else {
       return null;
     }
}
    

