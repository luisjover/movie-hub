import mongoose from "mongoose";
import config from "./config/config";
console.log(mongoose)

// SERVER SETTING UP
const bootstrap = async () => {
    // Connecting to mongodb
    mongoose.connect(config.DB.URI);
}



const connection = mongoose.connection;

connection.once("open", () => {
    console.log("MongoDb connection started")
})