import React from 'react'
import { NavLink } from 'react-router-dom'

const RegisteredUsers = () => (
    <>
        <li><NavLink to="/logout">Logout</NavLink></li> 
        <li><NavLink to="/newpost">New Post</NavLink></li> 
    </>
)

export default RegisteredUsers;