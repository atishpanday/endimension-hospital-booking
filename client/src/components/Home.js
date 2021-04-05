import React, { useEffect } from 'react'
import "./Home.css"
import NavBar from "./NavBar"
import Benefits from "./Benefits"
import Footer from "./Footer"
import { Link } from "react-router-dom"

const Home = () => {

    useEffect(() => {
        document.querySelector(".welcome-heading-container").style.opacity = 1
    })
    return (
        <>
        <NavBar />
        <div className = "home-container">
            <div className = "welcome-heading-container">
                <h1 className = "welcome-heading">Endimension Hospital</h1>
                <h4 className = "welcome-txt">We care for you as if our own lives were at stake</h4>
            </div>
            <div className = "book">
                <Link to = "/login"><button className = "book-btn">Book an appointment</button></Link>
            </div>
        </div>
        <Benefits />
        <Footer />
        </>
    )
}

export default Home
