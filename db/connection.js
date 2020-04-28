const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URI || "mongodb://localhost/skiTripCollection";

mongoose.connect(connectionString)
    .then(() => {
        console.log("connected to mongo at: " + connectionString);
    })
    .catch((err) => {
        console.log('Failed to connect to mongo')
        console.log(err)
    })

module.exports = mongoose