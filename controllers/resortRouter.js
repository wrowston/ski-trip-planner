const express = require('express')
const ResortModel = require('../models/resort.js')

const resortRouter = express.Router()

// GET ALL RESORTS
resortRouter.get('/', async (req, res) => {
    try {
        const allResorts = await ResortModel.getAllResorts()
        console.log('got all resorts successfully')
        res.render('resort/allResorts', { allResorts })
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})

// CREATE NEW RESORT FORM
resortRouter.get('/new', (req, res) => {
    res.render('resort/createResort')
})

// EDIT RESORT FORM
resortRouter.get('/:id/edit', async (req, res) => {
    try {
        const singleResort = await ResortModel.getOneResort(req.params.id)
        res.render('resort/editResort', { singleResort })
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})


// GET A SINGLE RESORT
resortRouter.get('/:id', async (req, res) => {
    try {
        const singleResort = await ResortModel.getOneResort(req.params.id)
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
        await ResortModel.createResort(req.body)
        res.redirect('/resort')
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})

// DELETE A RESORT
resortRouter.delete('/:id', async (req, res) => {
    try {
        await ResortModel.deleteResort(req.params.id)
        res.redirect('/resort')
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})

// UPDATE A RESORT
resortRouter.put('/:id', async (req, res) => {
    try {
        await ResortModel.updateResort(req.params.id, req.body)
        res.redirect(`/resort/${req.params.id}`)
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})

module.exports = resortRouter