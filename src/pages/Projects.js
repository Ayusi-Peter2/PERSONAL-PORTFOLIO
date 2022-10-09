import React,{useState,useEffect} from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList"
import "../styles/Projects.css"

function Projects({allProjects}) {
    // const [allProjects, setAllProjects] = useState([])

    // //const [deleteFn, setDelete] = useState(false)

    // useEffect(() => {
    //     fetch("http://localhost:3000/ProjectList")
    //         .then((response) => response.json())
    //         .then(projects => {
    //             //console.log(projects)
    //             setAllProjects(allProjects => projects)
    //         })
    // }, [])

    // console.log(allProjects)

    return (
        <div className="projects">

            <h1>My Personal Projects </h1>
            <div className="projectList">
                {allProjects.map((project,index) => {
                 
                    return <ProjectItem key={index} id={project.id} name={project.name}
                    image={project.image} allProjects={allProjects}/>
                })}

            </div>
        </div>
        // <div className="projects">

        //     <h1>My Personal Projects </h1>
        //     <div className="projectList">
        //         {ProjectList.map((project,index) => {
        //             return <ProjectItem id={index} name={project.name}
        //             image={project.image}/>
        //         })}

        //     </div>
        // </div>
    )
}

export default Projects;
