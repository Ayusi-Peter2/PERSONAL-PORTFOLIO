import React,{useState} from 'react'
import "./AdminPanel.css"
function AddNewProject({allProjects, setAllProjects}) {
    const [titleState, setTitle] = useState("")
    const [imageState, setImageState] = useState("")
    const [skillsState, setSkills] = useState("")
    

    function handleSubmit(e) {
        e.preventDefault();
        const allInputs = { name: titleState, image: imageState, skills: skillsState }
        //console.log(allInputs)
        fetch("http://localhost:3000/ProjectList", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(allInputs)

        })
            .then(res => res.json())
            .then(data =>{
               const newData=[...allProjects,data]

               console.log(newData)
              setAllProjects(updated=>newData)
              setTitle("")
              setImageState("")
              setSkills("")

    })
}

    return (
        <div className='add-new-project'>
            <h1>Add a new project to the database.</h1>
            <div className='project-form'>
            <form onSubmit={handleSubmit}>
                <label>Title:
                    <input onChange={(e) => { setTitle(titleState => e.target.value) }} type="text" value={titleState} name="title" />
                </label>
                <label>Image URL:
                    <input onChange={(e) => { setImageState(imageState => e.target.value) }} type="text" value={imageState} name="image" />
                </label>
                <label>Skills:
                    <input onChange={(e) => { setSkills(skillsState => e.target.value) }} type="text" value={skillsState} name="skills" />
                </label>
                <input type="submit" value="POST" />
            </form>

        </div>
        </div>
    )
}

export default AddNewProject