import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login></Login>} />
          <Route path="/home" element={<Home></Home>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

//!* What I learnt in this app:
//* Lots of css practice
//*use rem instead of px for better scaling
//* Can download Swiper JS for carousell

//*using axios instead of fetch
