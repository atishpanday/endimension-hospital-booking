import React, { useState, useEffect } from "react"
import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"
import Dashboard from './components/Dashboard'
import StaffLogin from "./components/StaffLogin"
import StaffBoard from "./components/StaffBoard"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"

export const loginContext = React.createContext()

export const staffLoginContext = React.createContext()

function App() {

  const [loggedIn, setLoggedIn] = useState(false)

  const [staffLoggedIn, setStaffLoggedIn] = useState(false)

  // const bookedTimings = useRef([])
  // const bookedEmails = useRef([])

  // const [bookings, setBookings] = useState([])

  // const fetchTimings = async () => {
  //   const res = await fetch("http://localhost:5000/booked-timings")
  //   const result = await res.json()
  //   // result.bookings.forEach(booking => {
  //     // setbookedTimings(old => [...old, booking.timing])
  //     // setbookedEmails(old => [...old, booking.email])
  //     // bookedEmails.push(booking.email)
  //     // bookedTimings.push(booking.timings)
  //   // })
  //   console.log(result)
  // }
  // useEffect(() => {
  //   fetchTimings()
  // })

  useEffect(() => {
    if (localStorage.getItem("email") !== null) {
      setLoggedIn(true)
    }
  }, [])

  return (
      <staffLoginContext.Provider value={{ staffLoggedIn, setStaffLoggedIn }}>
        <loginContext.Provider value={{ loggedIn, setLoggedIn }}>
          <Router>
            <Switch>
              <Route exact path="/" render={() => loggedIn ? <Redirect to="/dashboard" /> : <Home />} />
              <Route exact path="/login" render={() => loggedIn ? <Redirect to="/dashboard" /> : <Login />} />
              <Route exact path="/register" render={() => loggedIn ? <Redirect to="/dashboard" /> : <Register />} />
              <Route exact path="/dashboard" render={() => loggedIn ? <Dashboard /> : <Redirect to="/" />} />
              <Route exact path="/staff-login" render={() => staffLoggedIn ? <Redirect to="/staff-board" /> : <StaffLogin />} />
              <Route exact path="/staff-board" render={() => staffLoggedIn ? <StaffBoard /> : <Redirect to="/staff-login" />} />
            </Switch>
          </Router>
        </loginContext.Provider>
      </staffLoginContext.Provider>
  )
}

export default App
