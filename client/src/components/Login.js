import React, { useContext, useRef } from 'react'
import { Link } from "react-router-dom"
import { loginContext } from "../App"
import "./Login.css"

const Login = () => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const value = useContext(loginContext)
    const reqLogin = async (e) => {
        e.preventDefault()
        const res = await fetch("http://localhost:5000/login",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: emailRef.current.value,
                password: passwordRef.current.value
            })
        })
        if(res.ok){
            value.setLoggedIn(true)
            localStorage.setItem("email", emailRef.current.value)
        }
    }
    return (
        <div className = "login-container">
            <div className = "login-card">
                <form className = "login-form" onSubmit = {reqLogin}>
                    <div className = "login-heading">Login</div>
                    <div className = "fields">
                        <input required type = "email" className = "email field" placeholder = "Email" ref = {emailRef}></input>
                        <input required type = "password" className = "password field" placeholder = "Password" ref = {passwordRef}></input>
                    </div>
                    <button type = "submit" className = "login-btn">Login</button>
                </form>
                <div className = "register-prompt">Don't have an account? Register <Link to = "/register" style = {{ color: "blue", cursor: "pointer", textDecoration: "none"}}>here</Link></div>
            </div>
        </div>
    )
}

export default Login
