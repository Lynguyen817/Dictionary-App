import axios from "axios";
import React, {useState} from "react";
import "./App.css";
import "./Dictionary.css"

export default function Dictionary(){
    
    const [keyWord, setKeyword]= useState(null);

function handleResponse(response){
    console.log(response.data[0]);
  }
function search(event){
    event.preventDefault();

let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
axios.get(apiUrl).then (handleResponse);
}
function handleKeywordChange(event){
    event.preventDefault();
    setKeyword(event.target.value);
}
return(
    <div className="searchForm">
        <form onSubmit={search}>
          <input type="search" placeholder="Type a word.." size="25"
          autoFocus={true} onChange={handleKeywordChange}>
          </input>
          <button type="submit" className="btn btn-primary">Search</button>
        </form>
      </div>
);
}