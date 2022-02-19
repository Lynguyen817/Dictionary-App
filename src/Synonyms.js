import React from "react";

export default function Synonyms(props){
  console.log(props.synonyms);
    if (props.synonyms){
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
    


