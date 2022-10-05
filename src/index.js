import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import App from './App';
import About from "./components/About"
import Contacts from "./components/Contacts"
import Projects from "./components/Projects"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />}></Route>
    <Route path="/About" element={<About />}></Route>
    <Route path="/Contacts" element={<Contacts />}></Route>
    <Route path="/Projects" element={<Projects />}></Route>
    </Routes>
    </BrowserRouter>
   
  </React.StrictMode>
);


