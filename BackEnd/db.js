const mongoose = require('mongoose')
const mongoURI = "mongodb://0.0.0.0:27017/college"
const connecToMongo = () => {
    mongoose.connect(mongoURI)
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function () {
        console.log("Connected successfully");
    });
}
module.exports = connecToMongo;