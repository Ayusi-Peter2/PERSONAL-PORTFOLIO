import "./App.css"
import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/experience" element={<Experience />}></Route>
        </Routes>
      </BrowserRouter>

      {/* <NavBar/>
     <Home/>
     <Footer/> */}

    </div>
  );
}

export default App;
