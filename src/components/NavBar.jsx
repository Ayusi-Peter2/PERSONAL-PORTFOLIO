import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css"
import ReorderIcon from "@material-ui/icons/Reorder";
function Navbar(){
    const [expandNavbar, setExpandNavbar]=useState(false);
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