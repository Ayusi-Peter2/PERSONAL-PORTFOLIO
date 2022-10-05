import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Projects from "./components/Projects";
import Experience from "./components/Projects";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
