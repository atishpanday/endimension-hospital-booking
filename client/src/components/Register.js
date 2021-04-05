import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { loginContext } from "../App"
import "./Register.css"

const Register = () => {

    const value = useContext(loginContext)
    const reqReg = (e) => {
        e.preventDefault()
        value.setLoggedIn(true)
    }
    return (
        <div className = "register-container">
            <div className = "register-card">
                <form className = "register-form" onSubmit = {reqReg}>
                    <div className = "register-heading">Register</div>
                    <div className = "reg-fields">
                        <input required type = "email" className = "email reg-field" placeholder = "Email"></input>
                        <input required type = "password" className = "password reg-field" placeholder = "Password"></input>
                        <input required type = "password" className = "confirm-password reg-field" placeholder = "Confirm Password"></input>
                    </div>
                    <button type = "submit" className = "register-btn">Register</button>
                </form>
                <div className = "login-prompt">Already registered? Login <Link to = "/login" style = {{ color: "blue", cursor: "pointer", textDecoration: "none"}}>here</Link></div>
            </div>
        </div>
    )
}

export default Register