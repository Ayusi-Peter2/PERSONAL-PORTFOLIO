import React from 'react'
import "./AdminNav.css"
import { Link } from 'react-router-dom'
function AdminNav() {
    return (
        <div className='navbar'>
            {/* <h1>AdminNav</h1> */}
            <div className="links">


                <Link to="viewprojects">Projects Summary</Link>


                <Link to="addnewproject">Add New Project</Link>




            </div>

        </div>
    )
}

export default AdminNav