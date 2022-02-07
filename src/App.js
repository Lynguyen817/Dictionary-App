import React from "react";
import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="header">
        Dictionary App
      </header>
      <Dictionary/>
      <footer className="contact text-center">
        This website was built by Ly Nguyen
      </footer>
      </div>
    </div>
  );
}

export default App;
