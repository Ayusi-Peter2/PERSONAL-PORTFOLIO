import React from 'react'
import "./AdminPanel.css"
import "./ProjectsDisplay.css"
function AllprojectsDisplay({ allProjects,deleteFn, setDelete }) {

    // const { deleteFn, setDelete } = useContext(updateContext)
    // console.log(deleteFn)

    function handleDelete(elem) {

        fetch(`http://localhost:3000/ProjectList/${elem.id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data =>
                 setDelete(deleteFn => !deleteFn)
              
            )

    }

    return (
        <div className="view-all-projects-container">
            <h1>List of all Projects from the database</h1>

            <table cellPadding="0" cellSpacing="0">
                <thead>
                    <tr>
                        <th>Project Title</th>
                        <th>Image URL</th>
                        <th>Skills</th>

                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {allProjects.map((elem, i) =>
                        <tr>
                            <td>{elem.name}</td>
                            <td><img className="images" src={elem.image} /></td>
                            <td>{elem.skills}</td>
                           
                            <td><button onClick={() => { handleDelete(elem) }} className="delete">Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>




        </div>
    )
}

export default AllprojectsDisplay