import React from 'react'
import "./NavBar.css"

const NavBar = () => {
    return (
        <nav className = "nav-bar">
            <div className = "nav-links-container">
                <div className = "link home">Home</div>
                <div className = "link doctors">Doctors</div>
                <div className = "link locations">Locations</div>
            </div>
        </nav>
    )
}

export default NavBar
