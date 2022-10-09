
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import GitHubIcon from "@material-ui/icons/GitHub"
import "../styles/ProjectDisplay.css"

function ProjectDisplay({allProjects}) {
    const param = useParams()
    const [dataSearch, setDataSearch] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3000/ProjectList/${param.id}`)
            .then((response) => response.json())
            .then(projects => {

                setDataSearch(dataSearch => projects)
            })
    }, [])

    return (
        <div className="project">
            <h1>{dataSearch.name}</h1>
            <img src={dataSearch.image} />
            <p>
                <b>Skills:</b>{dataSearch.skills}
            </p>
            <GitHubIcon />
        </div>
    );
}

export default ProjectDisplay;