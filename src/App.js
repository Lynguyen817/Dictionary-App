import React from "react";
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="header">
        Dictionary 
      </header>
      
      <h2 className="text-center mt-4">
      What word do you want to look up?
      </h2>
      <Dictionary />
      <footer className="contact text-center">
        <em>This website was built by <a href="https://portfolio-project-lynguyen.netlify.app/about.html" target="_blank" rel="noreferrer">Ly Nguyen ,</a>
       {" "}opened-source on <a href="https://github.com/Lynguyen817/Dictionary-App" targer="_blank" rel="nonreferrer">GitHub</a>
        </em>
      </footer>
      </div>
    </div>
  );
}

export default App;
