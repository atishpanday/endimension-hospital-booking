import React, { useContext } from 'react'
import "./StaffLogin.css"
import { staffLoginContext } from "../App"

const StaffLogin = () => {

    const value = useContext(staffLoginContext)
    const reqStaffLogin = (e) => {
        e.preventDefault()
        value.setStaffLoggedIn(true)
    }
    return (
        <div className = "staff-login-container">
            <div className = "staff-login-card">
                <form className = "staff-login-form" onSubmit = {reqStaffLogin}>
                    <div className = "staff-login-heading">Login</div>
                    <div className = "staff-fields">
                        <input required type = "email" className = "email staff-field" placeholder = "Email"></input>
                        <input required type = "password" className = "password staff-field" placeholder = "Password"></input>
                    </div>
                    <button type = "submit" className = "staff-login-btn">Login</button>
                </form>
            </div>
        </div>
    )
}

export default StaffLogin
