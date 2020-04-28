const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

const resortSchema = new Schema({
    name: String,
    averageAnnualSnowfall: Number,
    yearToDateSnowfall: Number,
    currentBase: Number,
    verticalFeet: Number,
    amountOfTrails: Number,
    amountofLifts: Number,
    hasOnMountainLodging: Boolean,
    OnIkonPass: Boolean,
    OnEpicPass: Boolean,
    notes: String,
})

const resortCollection = mongoose.model('Resort', resortSchema)

function getAllResorts() {
    return resortCollection.find()
}

function getOneResort(id) {
    return resortCollection.findById(id)
}

function createResort(newResort) {
    return resortCollection.create(newResort)
}

function deleteResort(id) {
    return resortCollection.findByIdAndDelete(id)
}

function updateResort(id, newResort) {
    return resortCollection.findByIdAndUpdate(id, newResort)
}

module.exports = {
    getAllResorts,
    getOneResort,
    createResort,
    deleteResort,
    updateResort
}