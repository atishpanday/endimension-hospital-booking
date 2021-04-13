import React, { useRef, useContext, useEffect } from 'react'
import { loginContext } from "../App"
import "./Dashboard.css"

const Dashboard = () => {
    const emailId = localStorage.getItem("email")
    const timingRef = useRef("")
    const value = useContext(loginContext)
    const reqLogout = (e) => {
        e.preventDefault()
        value.setLoggedIn(false)
        localStorage.removeItem("email")
    }
    const reqBooking = async () => {
        const res = await fetch("http://localhost:5000/booking",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: emailId,
                timing: timingRef.current.value
            })
        })
        const result = await res.json()
        if(result.message === "success"){
            window.alert(`Your booking has been confirmed at ${timingRef.current.value}`)
        }
    }
    const disableBookedTimings = async () => {
        const res = await fetch("http://localhost:5000/booked-timings")
        const result = await res.json()
            for( const booking in result ) {
            document.querySelectorAll(".slot").forEach(slot => {
                if(slot.innerHTML === result[booking].timing){
                    slot.setAttribute("disabled", true)
                }
            })
        }
    }

    useEffect(() => {
        disableBookedTimings()
    }, [])
    return (
        <div className = "dashboard-container">
            <div className = "logout">
                <div className = "email-id">{emailId}</div>
                <button className = "logout-btn" onClick = {reqLogout}>Log out</button>
            </div>
            <div className = "dashboard">
                <div className = "appointment-heading-container">
                    <h1 className = "appointment-heading">Book an appointment with the best doctors all over India</h1>
                </div>
                <div className = "timings-container">
                    <label for = "timings">Select a time slot for the appointment</label>
                    <select name = "timings" className = "timings" id = "timings" ref = {timingRef}>
                        <option className = "slot a" value = "10 AM to 10.30 AM">10 AM to 10.30 AM</option>
                        <option className = "slot b" value = "10.30 AM to 11 AM">10.30 AM to 11 AM</option>
                        <option className = "slot c" value = "11 AM to 11.30 AM">11 AM to 11.30 AM</option>
                        <option className = "slot d" value = "11.30 AM to 12 Noon">11.30 AM to 12 Noon</option>
                        <option className = "slot e" value = "4 PM to 4.30 PM">4 PM to 4.30 PM</option>
                        <option className = "slot f" value = "4.30 PM to 5 AM">4.30 PM to 5 AM</option>
                        <option className = "slot g" value = "5 PM to 5.30 PM">5 PM to 5.30 PM</option>
                        <option className = "slot h" value = "5.30 PM to 6 PM">5.30 PM to 6 PM</option>
                    </select>
                </div>
                <div className = "book-appointment">
                    <button className = "book-appointment-btn" onClick = {reqBooking}>Book Now</button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
