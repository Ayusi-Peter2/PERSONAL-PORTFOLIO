import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminDashboard from './AdminDashboard'
import AdminNav from './AdminNav'
import "./AdminPanel.css"
import SideBar from './SideBar'

function AdminPanel() {
  
    return (
<div className='admin-screen'>
        <div class="wrapper">
            <div class="section">
<AdminNav/>
            {/* <AdminDashboard /> */}

                <SideBar />
                <Outlet/>
       
            </div>
      
        </div>
        </div>
    )
}

export default AdminPanel