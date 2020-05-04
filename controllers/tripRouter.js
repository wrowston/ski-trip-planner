const express = require('express')
const tripModel = require('../models/trip.js')
const userModel = require('../models/user.js')
const resortModel = require('../models/resort.js')

const tripRouter = express.Router()

// GET ALL TRIPS
tripRouter.get('/', async (req, res) => {
    try {
        const allTrips = await tripModel.getAllTrips()
        console.log('got all trips successfully')
        res.render('trip/allTrips', { allTrips })
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})

// GET ALL TRIPS BY ONE USER
tripRouter.get('/user/:userId', async (req, res) => {
    try {
        const allTrips = await tripModel.getAllTripsByUserId(req.params.userId)
        const user = await userModel.getOneUser(req.params.userId)
        console.log('got all trips successfully')
        res.render('trip/allTripsByUser', { allTrips, user })
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})

// CREATE NEW TRIP FORM
tripRouter.get('/newTrip/user/:userId', async (req, res) => {
    const singleUser = await userModel.getOneUser(req.params.userId)
    res.render('trip/createTrip', { singleUser })
})

// EDIT TRIP FORM
tripRouter.get('/:tripId/edit', async (req, res) => {
    try {
        const singleTrip = await tripModel.getOneTrip(req.params.tripId)
        res.render('trip/editTrip', { singleTrip })
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})


// GET A SINGLE TRIP
tripRouter.get('/:tripId', async (req, res) => {
    try {
        const singleTrip = await tripModel.getOneTrip(req.params.tripId)
        const resort = await resortModel.getAllResortsByTripId(req.params.tripId)
        const user = await userModel.getOneUser(singleTrip.userId)
        console.log('got a single trip successfully')
        res.render('trip/singleTrip', { singleTrip, resort, user })
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})

// CREATE A NEW TRIP
tripRouter.post('/', async (req, res) => {
    try {
        const trip = await tripModel.createTrip(req.body)
        res.redirect(`/user/${trip.userId}`)
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})

// DELETE A TRIP
tripRouter.delete('/:tripId', async (req, res) => {
    try {
        const trip = await tripModel.deleteTrip(req.params.tripId)
        res.redirect(`/user/${trip.userId}`)
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})

// UPDATE A TRIP
tripRouter.put('/:tripId', async (req, res) => {
    try {
        await tripModel.updateTrip(req.params.tripId, req.body)
        res.redirect(`/trip/${req.params.tripId}`)
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})

module.exports = tripRouter