const express = require('express')
const resortModel = require('../models/resort.js')
const tripModel = require('../models/trip.js')

const resortRouter = express.Router()

// GET ALL RESORTS
resortRouter.get('/', async (req, res) => {
    try {
        const allResorts = await resortModel.getAllResorts()
        console.log('got all resorts successfully')
        res.render('resort/allResorts', { allResorts })
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})

resortRouter.get('/trip/:tripId', async (req, res) => {
    try {
        const allResorts = await resortModel.getAllResortsByTripId(req.params.tripId)
        const trip = await tripModel.getOneTrip(req.params.tripId)
        console.log('got all resorts successfully')
        res.render('resort/allResorts', { allResorts, trip })
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})


// CREATE NEW RESORT FORM
resortRouter.get('/newResort/trip/:tripId', async (req, res) => {
    const singleTrip = await tripModel.getOneTrip(req.params.tripId)
    res.render('resort/createResort', { singleTrip })
})

// EDIT RESORT FORM
resortRouter.get('/:resortId/edit', async (req, res) => {
    try {
        const singleResort = await resortModel.getOneResort(req.params.resortId)
        res.render('resort/editResort', { singleResort })
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})


// GET A SINGLE RESORT
resortRouter.get('/:resortId', async (req, res) => {
    try {
        const singleResort = await resortModel.getOneResort(req.params.resortId)
        console.log('got a single resort successfully')
        res.render('resort/singleResort', { singleResort })
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})

// CREATE A NEW RESORT
resortRouter.post('/', async (req, res) => {
    try {
        const resort = await resortModel.createResort(req.body)
        res.redirect(`/trip/${resort.tripId}`)
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})

// DELETE A RESORT
resortRouter.delete('/:resortId', async (req, res) => {
    try {
        const resort = await resortModel.deleteResort(req.params.resortId)
        res.redirect(`/trip/${resort.tripId}`)
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})

// UPDATE A RESORT
resortRouter.put('/:resortId', async (req, res) => {
    try {
        await resortModel.updateResort(req.params.resortId, req.body)
        res.redirect(`/resort/${req.params.resortId}`)
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})

module.exports = resortRouter