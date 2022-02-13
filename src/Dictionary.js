import axios from "axios";
import React, {useState} from "react";
import "./App.css";
import "./Dictionary.css";
import "./index.css";
import Results from "./Results";
import Photos from"./Photos";

export default function Dictionary(){
    const [keyWord, setKeyword]= useState(null);
    const [results, setResults]= useState(null);
    const [photos, setPhotos]= useState(null);

function handleDictionaryResponse(response){
    setResults(response.data[0]);
  }
function handlePexelsResponse(response){
   setPhotos(response.data.photos);
}

function search(event){
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiUrl).then (handleDictionaryResponse);

    let pexelsApiKey ="563492ad6f9170000100000136f6563657e242e1bc753bf1cc602bdf";
    let pexelsApiUrl =  `https://api.pexels.com/v1/search?query=${keyWord}&per_page=9`;
    let header ={ Authorization: `Bearer ${pexelsApiKey}`};
    axios.get(pexelsApiUrl,{ headers:header }).then (handlePexelsResponse);
}
function handleKeywordChange(event){
    event.preventDefault();
    setKeyword(event.target.value);
   }
return(
    <div className="searchForm">
      <section>
        <form onSubmit={search}>
          <input type="search" placeholder="Type a word.."
          autoFocus={true} onChange={handleKeywordChange}>
          </input>
          <button type="submit" className="btn btn-secondary">Search </button>
        </form>
        <div className= "hints">
          <em>suggested words: music, play, coffee ... </em>
        </div>
      </section>
        <Results results={results}/>
        <Photos photos={photos}/>
      </div>
);
}