import mongoose from "mongoose";
import config from "../config/config";


// SERVER SETTING UP
export const connectDb = async () => {
    // Connecting to mongodb
    if (config.DB.URI) mongoose.connect(config.DB.URI);
}



// const dbConnection = mongoose.connection;

// dbConnection.once("open", () => {
//     console.log("MongoDb connection started")
// })