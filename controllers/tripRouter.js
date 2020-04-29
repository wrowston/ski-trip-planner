const express = require('express')
const TripModel = require('../models/trip.js')

const tripRouter = express.Router()

// GET ALL TRIPS
tripRouter.get('/', async (req, res) => {
    try {
        const allTrips = await TripModel.getAllTrips()
        console.log('got all trips successfully')
        res.render('trip/allTrips', { allTrips })
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})

// CREATE NEW TRIP FORM
tripRouter.get('/new', (req, res) => {
    res.render('trip/createTrip')
})

// EDIT TRIP FORM
tripRouter.get('/:id/edit', async (req, res) => {
    try {
        const singleTrip = await TripModel.getOneTrip(req.params.id)
        res.render('trip/editTrip', { singleTrip })
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})


// GET A SINGLE TRIP
tripRouter.get('/:id', async (req, res) => {
    try {
        const singleTrip = await TripModel.getOneTrip(req.params.id)
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
        await TripModel.createTrip(req.body)
        res.json('created trip')
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})

// DELETE A TRIP
tripRouter.delete('/:id', async (req, res) => {
    try {
        await TripModel.deleteTrip(req.params.id)
        res.json('trip deleted')
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})

// UPDATE A TRIP
tripRouter.put('/:id', async (req, res) => {
    try {
        await TripModel.updateTrip(req.params.id, req.body)
        res.json('updated trip')
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})

module.exports = tripRouter