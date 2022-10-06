import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList"
import "../styles/Projects.css"
function Projects() {
    return (
        <div className="projects">

            <h1>My Personal Projects </h1>
            <div className="projectList">
                {ProjectList.map((project,index) => {
                    return <ProjectItem id={index} name={project.name}
                    image={project.image}/>
                })}

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