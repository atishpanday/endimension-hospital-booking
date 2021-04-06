import React, { useContext } from 'react'
import "./StaffBoard.css"
import { bookingContext, staffLoginContext } from "../App"

const StaffBoard = () => {

    const value = useContext(staffLoginContext)
    const bookingValue = useContext(bookingContext)
    const reqStaffLogout = () => {
        value.setStaffLoggedIn(false)
    }
    console.log(bookingValue)
    return (
        <div className="staff-board-container">
            <div className="staff-board">
                <div className="bookings">
                    <h1>Bookings for today</h1>
                </div>
            </div>
            <div className="staff-logout">
                <button className="staff-logout-btn" onClick={reqStaffLogout}>Log out</button>
            </div>
        </div>
    )
}

export default StaffBoard
