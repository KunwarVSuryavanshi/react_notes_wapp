import React from 'react'
import { Link } from 'react-router-dom'
import '../css/TopBar.css'
import logo from '../images/notes.png'
function TopBar() {
    return (
        <nav className="top-bar">
            <img src={logo}/>
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/addnotes">
                    <li>Add Notes</li>
                </Link>
                <Link to="/mynotes">
                    <li>My Notes</li>
                </Link>                
            </ul>
        </nav>
    )
}

export default TopBar
