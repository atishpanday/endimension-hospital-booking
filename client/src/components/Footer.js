import React from 'react'
import { Link } from "react-router-dom"
import "./Footer.css"

const Footer = () => {
    return (
        <div className = "footer-container">
            <div className = "footer">
                <div className = "contact-us footer-link">Contact us</div>
                <div className = "donate footer-link">Make a donation</div>
                <div className = "need-help footer-link">Need help?</div>
            </div>
            <div className = "staff-login">
                <Link to = "/staff-login" style = {{ textDecoration: "none" }}><div className = "staff-login-link">Login as staff</div></Link>
            </div>
        </div>
    )
}

export default Footer
