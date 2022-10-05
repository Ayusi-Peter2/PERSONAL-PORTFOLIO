import Navbar from "./NavBar";
import Footer from "./Footer";
function Projects(){
    return(
        <div >
            <Navbar/>
            <h1>Some of my projects include: </h1>
            <ul>
                <li>Weather Application</li>
                <li>Smart Meter Reader</li>
                <li>Dating App</li>
                <li>School Management System</li>
            </ul>
            <Footer/>
        </div>
    )
}

export default Projects;