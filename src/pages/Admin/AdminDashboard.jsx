import React from 'react'
import Home from '../Home'
import "./AdminPanel.css"
function AdminDashboard({setShowNav}) {
    setShowNav(false)
  return (
    <div className="dashboard-container"> 
    <main>
    <div class="intro">
      <h1>Hello Admin</h1>
      <p>Manage The Portfolio Components From Here.</p>

    </div>
    <div class="about-me">
      <div class="about-me-text">
        <h2>How It Works</h2>
        <p>From the sidebar, admin can be able to view all projects, delete and add a new project.</p>
      </div>
      <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1415&q=80" alt="me"/>
    </div>

    <div class="achievements">
      <div class="work">
        <i class="fas fa-atom"></i>
        <p class="work-heading">Projects</p>
        <p class="work-text">I have a Portfolio of previous projects that I've completed. Any user may access the front end to view them all.</p>
      </div>
      
      <div class="work">
        <i class="fas fa-skiing"></i>
        <p class="work-heading">Skills</p>
        <p class="work-text">Each project relates to the abilities that were learned. programming languages and related technologies are the main focus.</p>
      </div>
      <div class="work">
        <i class="fas fa-ethernet"></i>
        <p class="work-heading">Experience</p>
        <p class="work-text">Additionally, the portfolio displays prior training and employment background.</p>
      </div>
    </div>
    
  </main>

    </div>
  )
}

export default AdminDashboard