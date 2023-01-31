const mongoose = require("mongoose");
const config = require('../../config');

const connectDB = async () => {
    try {
        
        mongoose.set('strictQuery', false);
        const con = await mongoose.connect(config.DB_KEY, {
            useNewUrlParser: true,
           
        })

        console.log(`mongo connected: ${con.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    } 
}

module.exports = connectDB;