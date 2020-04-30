const express = require('express')
const tripModel = require('../models/trip.js')
const userModel = require('../models/user.js')

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
tripRouter.get('/user/:id', async (req, res) => {
    try {
        const allTrips = await tripModel.getAllTripsByUserId(req.params.id)
        console.log('got all trips successfully')
        res.render('trip/allTrips', { allTrips })
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})

// CREATE NEW TRIP FORM
tripRouter.get('/new/user/:id', async (req, res) => {
    const singleUser = await userModel.getOneUser(req.params.id)
    res.render('trip/createTrip', { singleUser })
})

// EDIT TRIP FORM
tripRouter.get('/:id/edit', async (req, res) => {
    try {
        const singleTrip = await tripModel.getOneTrip(req.params.id)
        res.render('trip/editTrip', { singleTrip })
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})


// GET A SINGLE TRIP
tripRouter.get('/:id', async (req, res) => {
    try {
        const singleTrip = await tripModel.getOneTrip(req.params.id)
        console.log('got a single trip successfully')
        res.render('trip/singleTrip', { singleTrip })
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})

// CREATE A NEW TRIP
tripRouter.post('/', async (req, res) => {
    try {
        await tripModel.createTrip(req.body)
        res.redirect('/trip')
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})

// DELETE A TRIP
tripRouter.delete('/:id', async (req, res) => {
    try {
        await tripModel.deleteTrip(req.params.id)
        res.redirect('/trip')
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})

// UPDATE A TRIP
tripRouter.put('/:id', async (req, res) => {
    try {
        await tripModel.updateTrip(req.params.id, req.body)
        res.redirect(`/trip/${req.params.id}`)
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})

module.exports = tripRouter