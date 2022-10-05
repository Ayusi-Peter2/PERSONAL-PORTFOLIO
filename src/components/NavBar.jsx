import "../index.css"
import { Link } from "react-router-dom";
function Navbar(){
    return(
        <div className="navbar">
            <div className="toggleButton">
                <button></button>
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