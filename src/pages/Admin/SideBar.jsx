import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import "./AdminPanel.css"



function SideBar() {

const logout=useNavigate()

function handleLogout(){
return(
    logout("/admin")
)
}


    return (
        <div>
            <div class="sidebar">
                <div class="profile">
                    <img src="https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-website-or-app-ui-vector-id1314335932?k=20&m=1314335932&s=612x612&w=0&h=iE5A7kpl618-ysPrDlFr1-_x4o5zeGXEJMCe3y6WpFM=" alt="profile_picture" />
                    <h3>James Njenga</h3>
                    <p>Software Developer</p>
                </div>

                <ul>
                    <li>

                      < span class="icon"><i class="fas fa-desktop"></i></span>
                        <span class="item"><Link to="">Dashboard</Link></span>



                    </li>

                    <li><Link to="viewprojects">View All Projects</Link></li>

                    <li><Link to="addnewproject">Add New Project</Link></li>

                    <li><a href="/" target="_blank">Live Preview</a></li>
                    <li>
                        <a onClick={handleLogout}>
                            <span class="icon"><i class="fas fa-user-friends"></i></span>
                            <span class="item">Logout</span>
                        </a>
                    </li>

                </ul>
            </div>

        </div>
    )
}

export default SideBar