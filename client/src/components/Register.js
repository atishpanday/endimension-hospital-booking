import React, { useContext, useRef } from 'react'
import { Link } from "react-router-dom"
import { loginContext } from "../App"
import "./Register.css"

const Register = () => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const value = useContext(loginContext)
    const reqReg = async (e) => {
        e.preventDefault()
        if (passwordRef.current.value === passwordConfirmRef.current.value) {
            const res = await fetch("http://localhost:5000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: emailRef.current.value,
                    password: passwordRef.current.value
                })
            })

            const result = await res.json()

            if (result.message === "success") {
                localStorage.setItem("email", emailRef.current.value)
                value.setLoggedIn(true)
                window.alert("Registered")
            }
        } else {
            window.alert("Passwords don't match")
        }
    }
    return (
        <div className="register-container">
            <div className="register-card">
                <form className="register-form" onSubmit={reqReg}>
                    <div className="register-heading">Register</div>
                    <div className="reg-fields">
                        <input required type="email" className="email reg-field" placeholder="Email" ref = {emailRef}></input>
                        <input required type="password" className="password reg-field" placeholder="Password" ref = {passwordRef}></input>
                        <input required type="password" className="confirm-password reg-field" placeholder="Confirm Password" ref = {passwordConfirmRef}></input>
                    </div>
                    <button type="submit" className="register-btn">Register</button>
                </form>
                <div className="login-prompt">Already registered? Login <Link to="/login" style={{ color: "blue", cursor: "pointer", textDecoration: "none" }}>here</Link></div>
            </div>
        </div>
    )
}

export default Register