import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { loginContext } from "../App"
import "./Login.css"

const Login = () => {

    const value = useContext(loginContext)
    const reqLogin = (e) => {
        e.preventDefault()
        value.setLoggedIn(true)
    }
    return (
        <div className = "login-container">
            <div className = "login-card">
                <form className = "login-form" onSubmit = {reqLogin}>
                    <div className = "login-heading">Login</div>
                    <div className = "fields">
                        <input required type = "email" className = "email field" placeholder = "Email"></input>
                        <input required type = "password" className = "password field" placeholder = "Password"></input>
                    </div>
                    <button type = "submit" className = "login-btn">Login</button>
                </form>
                <div className = "register-prompt">Don't have an account? Register <Link to = "/register" style = {{ color: "blue", cursor: "pointer", textDecoration: "none"}}>here</Link></div>
            </div>
        </div>
    )
}

export default Login
