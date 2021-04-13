import React, { useContext, useEffect, useRef } from 'react'
import "./StaffBoard.css"
import { staffLoginContext } from "../App"

const StaffBoard = () => {

    const value = useContext(staffLoginContext)

    const reqStaffLogout = () => {
        value.setStaffLoggedIn(false)
    }

    // const [bookings, setBookings] = useState([])

    const bookingsRef = useRef()

    const getBookings = async () => {
        const res = await fetch("http://localhost:5000/booked-timings")
        const result = await res.json()
        for(const item in result){
            // setBookings(old => [...old, item])
            bookingsRef.current.innerHTML += "<h4>" + result[item].email + " : " + result[item].timing + "</h4>"
        }
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
            <div className = "bookings" ref = {bookingsRef}>

            </div>
            <div className="staff-logout">
                <button className="staff-logout-btn" onClick={reqStaffLogout}>Log out</button>
            </div>
        </div>
    )
}

export default StaffBoard
