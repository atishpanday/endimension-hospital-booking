import React, { useState } from "react"
import './App.css'
import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"
import Dashboard from './components/Dashboard'
import StaffLogin from "./components/StaffLogin"
import StaffBoard from "./components/StaffBoard"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"

export const loginContext = React.createContext()

export const staffLoginContext = React.createContext()

export const bookingContext = React.createContext()

function App() {

  const [loggedIn, setLoggedIn] = useState(false)

  const [staffLoggedIn, setStaffLoggedIn] = useState(false)

  const [bookings, setBookings] = useState([])
  
  return (
    <bookingContext.Provider value = {{bookings, setBookings}}>
    <staffLoginContext.Provider value = {{staffLoggedIn, setStaffLoggedIn}}>
    <loginContext.Provider value = {{loggedIn, setLoggedIn}}>
    <Router>
      <Switch>
        <Route exact path = "/" render = {() => loggedIn ? <Redirect to = "/dashboard" /> : <Home /> } />
        <Route exact path = "/login" render = {() => loggedIn ? <Redirect to = "/dashboard" /> : <Login />} />
        <Route exact path = "/register" render = {() => loggedIn ? <Redirect to = "/dashboard" /> : <Register />} />
        <Route exact path = "/dashboard" render = {() => loggedIn ? <Dashboard /> : <Redirect to = "/" />} />
        <Route exact path = "/staff-login" render = {() => staffLoggedIn ? <Redirect to = "/staff-board" /> : <StaffLogin />} />
        <Route exact path = "/staff-board" render = {() => staffLoggedIn ? <StaffBoard /> : <Redirect to = "/staff-login" />} />
      </Switch>
    </Router>
    </loginContext.Provider>
    </staffLoginContext.Provider>
    </bookingContext.Provider>
  )
}

export default App
