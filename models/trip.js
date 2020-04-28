const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema
// require ski resort schema

const tripSchema = new Schema({
    name: String,
    country: String,
    state: String,
    city: String,
    airport: String,
    daysSkiing: Number,
    passortRequired: Boolean,
    notes: String,
    // skiResort: 
})

const tripCollection = mongoose.model('Trip', tripSchema)

function getAllTrips() {
    return tripCollection.find()
}

function getOneTrip(id) {
    return tripCollection.findById(id)
}

function createTrip(newTrip) {
    return tripCollection.create(newTrip)
}

function deleteTrip(id) {
    return tripCollection.findByIdAndDelete(id)
}

function updateTrip(id, newTrip) {
    return tripCollection.findByIdAndUpdate(id, newTrip)
}

module.exports = {
    getAllTrips,
    getOneTrip,
    createTrip,
    deleteTrip,
    updateTrip
}