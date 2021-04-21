import React from 'react'
import '../css/TopBar.css'
import logo from '../images/notes.png'
function TopBar() {
    return (
        <nav className="top-bar">
            <ul>
                <li>Home</li>
                <li>Add Notes</li>
                <li>My Notes</li>
            </ul>
        </nav>
    )
}

export default TopBar
