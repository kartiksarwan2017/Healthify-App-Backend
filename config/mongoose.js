const mongoose = require('mongoose');

// Set up default mongoose connection
var mongoDB = process.env.MONGODB_URL;
const db = mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("CONNECTION ESTABLISHED"));

module.exports = db;