import "./App.css"
import React, { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";
import Login from "./pages/Admin/Login";
import AdminPanel from "./pages/Admin/AdminPanel";
import AllprojectsDisplay from "./pages/Admin/AllprojectsDisplay";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AddNewProject from "./pages/Admin/AddNewProject";
import updateContent from "./pages/Admin/Context";
import AdminNav from "./pages/Admin/AdminNav";
import Item from "./components/Item";


function App() {

  const [allProjects, setAllProjects] = useState([])
  const [showNav, setShowNav] = useState(true);

const [deleteFn, setDelete] = useState(false)

  useEffect(() => {
    fetch("http://localhost:3000/ProjectList")
      .then((response) => response.json())
      .then(projects => {
        //console.log(projects)
        setAllProjects(allProjects => projects)
      })
  }, [deleteFn])
  return (
    <div className="App">
      <BrowserRouter>
      {   showNav &&
          <nav>
            <NavBar />
          </nav>
   } 

   
        <Routes>

   
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects allProjects={allProjects} />} />
          <Route path="/projects/:id" element={<ProjectDisplay />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/admin" element={<Login />} />
          <Route path="dashboard" element={<AdminPanel />}>

            <Route path="" element={<AdminDashboard setShowNav={setShowNav}/>} />
            <Route path="viewprojects" element={<AllprojectsDisplay allProjects={allProjects} setAllProjects={setAllProjects} deleteFn={deleteFn} setDelete={setDelete}/>} />
            <Route path="addnewproject" element={<AddNewProject allProjects={allProjects} setAllProjects={setAllProjects}/>} />
          
          </Route>
     
        </Routes>
        
            <Footer />
         
      </BrowserRouter>

    </div>
  );
}

export default App;
