const mongoose = require("mongoose");


async function connectDB() {

await mongoose.connect("mongodb+srv://YT:Cm2wG8ya29ljQRz7@yt-complete-backend.5hmhfkd.mongodb.net/project-2")

console.log("Connected to DB")

};



module.exports = connectDB;

