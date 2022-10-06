import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/NavBar.css"
import ReorderIcon from "@material-ui/icons/Reorder";
function Navbar(){
    // Added state to manage how Navbar responds to different screen sizes
    const [expandNavbar, setExpandNavbar]=useState(false);
    
    // Location hook to manage our routes when Navbar changes
    const location=useLocation();
    useEffect(()=>{
        setExpandNavbar(false)
    },[location])


    return(
        <div className="navbar" id={expandNavbar?"open":"close"}>
            <div className="toggleButton">
                <button 
                onClick={()=>{
                setExpandNavbar((prev)=>!prev)
                }}>
                    <ReorderIcon/>
                    </button>
            </div>
            <div className="links">
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/experience">Experience</Link>

            </div>
            {/* <nav>
                <list className="list">
                <Link to="/" className="items">Home</Link>
                <Link to="/About" className="items">About</Link>
                <Link to="/Contacts" className="items">Contact</Link>
                <Link to="/Projects" className="items">Projects</Link>
                </list>

            </nav> */}

        </div>
    )
}
export default Navbar