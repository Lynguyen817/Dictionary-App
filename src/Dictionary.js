import React, {useState} from "react";
import "./App.css";
import "./Dictionary.css"

export default function Dictionary(event){
    
    const [keyWord, setKeyword]= useState(null);
    alert(`Searching ${keyWord}...`);
function handleKeywordChange(){
    event.preventDefault();
    setKeyword(event.target.value);
}

function handleSubmit(event){
    event.preventDefault();
    
  }

return(
    <div className="searchForm">
        <form onSubmit={handleSubmit}>
          <input type="search" placeholder="Type a word.." size="25"
          autoFocus={true} onChange={handleKeywordChange}>
          </input>
          <button type="submit" className="btn btn-primary">Search</button>
        </form>
      </div>
);
}