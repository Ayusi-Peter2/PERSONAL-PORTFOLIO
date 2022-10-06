import ProjectItem from "../components/ProjectItem";
import proj1 from "../assets/proj1.jpg";
import proj2 from "../assets/proj2.jpg";
function Projects(){
    return(
        <div className="projects">
          
            <h1>My Personal Projects </h1>
            <div className="projectList">
<ProjectItem name="Social Media Website" image={proj1}/>
<ProjectItem name="Dating App" image={proj2}/>

            </div>
            {/* <ul>
                <li>Weather Application</li>
                <li>Smart Meter Reader</li>
                <li>Dating App</li>
                <li>School Management System</li>
            </ul> */}
           
        </div>
    )
}

export default Projects;