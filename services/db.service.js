// const mongoose = require('mongoose');
// DATA_BASE_URL = process.env.DATA_BASE_URL
// mongoose.connect('mongodb://localhost:27017/(DATA_BASE_URL)', {
//     // console.log("http://localhost:".concat(PORT));
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//     console.log('Connected to MongoDB successfully');
// });

// module.exports = mongoose;
// import mongoose from "mongoose";
mongoose.set("strictQuery", false);
// import dotenv from 'dotenv';
// dotenv.config()
const DATABASE_URL = process.env.DATABASE_URL
const mongoDB =DATABASE_URL;

main().catch((err) => console.log(err));
async function main() {
    console.log(mongoDB);
    
    await mongoose.connect(mongoDB || '');
}

export default mongoose