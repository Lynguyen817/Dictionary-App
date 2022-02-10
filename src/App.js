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
        This website was built by <a href="https://github.com/Lynguyen817/Dictionary-App/tree/main/src">Ly Nguyen</a>
      </footer>
      </div>
    </div>
  );
}

export default App;
