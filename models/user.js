const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema
// require ski trip schema

const userSchema = new Schema({
    name: String,
    skillLevel: String,
    skierOrSnowboarder: String,
    // skiTrip: 
})

const userCollection = mongoose.model('User', userSchema)

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