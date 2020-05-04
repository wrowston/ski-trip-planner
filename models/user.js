const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    skillLevel: {
        type: String,
        required: true
    },
    skiOrSnowboard: {
        type: String,
        required: true
    },
    bio: String
})

const userCollection = mongoose.model('user', userSchema)

function getAllUsers() {
    return userCollection.find()
}

function getOneUser(id) {
    return userCollection.findById(id)
}

function createUser(newUser) {
    return userCollection.create(newUser)
}

function deleteUser(id) {
    return userCollection.findByIdAndDelete(id)
}

function updateUser(id, newUser) {
    return userCollection.findByIdAndUpdate(id, newUser)
}

module.exports = {
    getAllUsers,
    getOneUser,
    createUser,
    deleteUser,
    updateUser
}