const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        
        mongoose.set('strictQuery', false);
        const con = await mongoose.connect(process.env.DB_KEY, {
            useNewUrlParser: true,
           
        })

        console.log(`mongo connected: ${con.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    } 
}

module.exports = connectDB;