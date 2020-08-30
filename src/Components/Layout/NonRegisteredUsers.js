import React from 'react'
import { NavLink } from 'react-router-dom'

const NonRegisteredUsers = () => (
<>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
</>
)

export default NonRegisteredUsers;