import React, { useState, useContext, useEffect, useRef } from 'react'
import "./StaffBoard.css"
import { staffLoginContext } from "../App"

const StaffBoard = () => {

    const value = useContext(staffLoginContext)

    const reqStaffLogout = () => {
        value.setStaffLoggedIn(false)
    }

    const bookings = useRef([])
    // const bookings = []
    const [loading, setLoading] = useState(true)

    const sampleRef = useRef(["a", "b", "c"])

    const getBookings = async () => {
        const res = await fetch("http://localhost:5000/booked-timings")
        const result = await res.json()
        for(const item in result){
            bookings.current.push(result[item].email + " : " + result[item].timing)
        }
        console.log(bookings.current)
        setLoading(false)
    }

    useEffect(() => {
        getBookings()
    })

    return (
        <div className="staff-board-container">
            <div className="staff-board">
                <div className="bookings">
                    <h1>Bookings for today</h1>
                </div>
            </div>
            <div className = "bookings">
                {!loading && bookings.current.map((item, i) => (
                    <h4 key = {i}>{item}</h4>
                    )
                )}
            </div>
            <div className="staff-logout">
                <button className="staff-logout-btn" onClick={reqStaffLogout}>Log out</button>
            </div>
        </div>
    )
}

export default StaffBoard
