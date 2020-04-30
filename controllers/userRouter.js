const express = require('express')
const userModel = require('../models/user.js')
const tripModel = require('../models/trip.js')

const userRouter = express.Router()

// GET ALL USERS
userRouter.get('/', async (req, res) => {
    try {
        const allUsers = await userModel.getAllUsers()
        console.log('got all users successfully')
        res.render('user/allUsers', { allUsers })
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})

// CREATE NEW USER FORM
userRouter.get('/new', (req, res) => {
    res.render('user/createUser')
})

// EDIT USER FORM
userRouter.get('/:id/edit', async (req, res) => {
    try {
        const singleUser = await userModel.getOneUser(req.params.id)
        res.render('user/editUser', { singleUser })
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})


// GET A SINGLE USER
userRouter.get('/:id', async (req, res) => {
    console.log('userRouter.GET one route')
    try {
        const singleUser = await userModel.getOneUser(req.params.id)
        const trip = await tripModel.getAllTripsByUserId(req.params.id)
        console.log('got a single user successfully')
        res.render('user/singleUser', { singleUser, trip })
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})

// CREATE A NEW USER
userRouter.post('/', async (req, res) => {
    try {
        await userModel.createUser(req.body)
        res.redirect('/user')
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})

// DELETE A USER
userRouter.delete('/:id', async (req, res) => {
    try {
        await userModel.deleteUser(req.params.id)
        res.redirect('/user')
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})

// UPDATE A USER
userRouter.put('/:id', async (req, res) => {
    try {
        await userModel.updateUser(req.params.id, req.body)
        res.redirect(`/user/${req.params.id}`)
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})

module.exports = userRouter