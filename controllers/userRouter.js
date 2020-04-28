const express = require('express')
const UserModel = require('../models/user.js')

const userRouter = express.Router()

// GET ALL USERS
userRouter.get('/', async (req, res) => {
    try {
        const allUsers = await UserModel.getAllUsers()
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

// GET A SINGLE USER
userRouter.get('/:id', async (req, res) => {
    try {
        const singleUser = await UserModel.getOneUser()
        console.log('got a single user successfully')
        res.json(singleUser)
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})

// CREATE A NEW USER
userRouter.post('/', async (req, res) => {
    try {
        await UserModel.createUser(req.body)
        res.json('created user')
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})

// DELETE A USER
userRouter.delete('/:id', async (req, res) => {
    try {
        await UserModel.deleteUser(req.params.id)
        res.json('user deleted')
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})

// UPDATE A USER
userRouter.put('/:id', async (req, res) => {
    try {
        await UserModel.updateUser(req.params.id, req.body)
        res.json('updated user')
    } catch (err) {
        console.log(err)
        res.json(err)
    }
})

module.exports = userRouter