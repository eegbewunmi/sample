import React from 'react'
import {AiFillHome} from "react-icons/ai"
import {IoSettingsSharp} from "react-icons/io5"
import {useNavigate} from "react-router-dom"
import './sidebar.css'

const Sidebar = () => {
    const navigate = useNavigate("")

  return (
    <div className='sidebar'>
        <div className='logo'>
            <div className='img'></div>
            <div className='names'>
              <h3 className='grove'>User Grove</h3>
            <h6 className='yourname'>by [your name]</h6></div>
        </div>
        <div>
            <p className='home'><AiFillHome className='fillh' /> Home</p>
            <h5 className='direct' >DIRECTORY</h5> <hr className='hrs'/>
            <p onClick={() => navigate("/dashboard")} className='dashboard' >Dashboard</p>
            <p onClick={() => navigate("/search")} className='search' >Search posts</p>
            <p onClick={() => navigate("/adduser")} className='add'  >Add user</p><hr className='hrs'/>
            <p className='setting'><IoSettingsSharp />Settings</p>
        </div>
    </div>
  )
}

export default Sidebar