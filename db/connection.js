const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URI || "mongodb://localhost/skiTripCollection";

if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
}
else {
    mongoose.connect('mongodb://localhost/skiTripCollection');
}
mongoose.connection.on('error', err => {
    console.error('MongoDB connection error: ' + err);
    process.exit(-1);
}
);
mongoose.connection.once('open', () => {
    console.log("Mongoose has connected to MongoDB!");
});

module.exports = mongoose