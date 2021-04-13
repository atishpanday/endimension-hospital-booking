const express = require("express")
const server = express()
const cors = require("cors")

server.use(express.json())

server.use(cors())

const port = 5000

const users = []

const bookings = []

server.post("/register", (req, res) => {
    try {
        const user = {
            email: req.body.email,
            password: req.body.password
        }
        users.push(user)
        console.log(users)
        res.json({message: "success"})
    } catch (err) {
        res.sendStatus(500)
    }
})

server.post("/login", (req, res) => {
    try {
        const user = {
            email: req.body.email,
            password: req.body.password
        }
        console.log(user)
        if (users.filter(item => item.email === user.email && item.password === user.password).length !== 0) {
            console.log("Logged in")
            res.sendStatus(201)
        } else {
            console.log("could not login")
            res.status(403).send()
        }
    } catch (err) {
        res.status(500).send()
    }
})

server.post("/booking", (req, res) => {
    try {
        const booking = {
            email: req.body.email,
            timing: req.body.timing
        }
        bookings.push(booking)
        console.log(bookings)
        res.json({message: "success"})
    } catch (err) {
        res.sendStatus(500)
    }
})

server.get("/booked-timings", (req, res) => {
    res.json({...bookings})
})

server.listen(port, () => {
    console.log("server is listening at port " + port)
})