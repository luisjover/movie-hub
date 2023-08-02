import config from "./config/config";
import { connectDb } from "./db/database";
import app from "./server";

// PORT
const PORT = config.app.PORT


connectDb().then(async function onServerStart() {
    console.log("MongoDb connection running")

    app.listen(PORT, (): void => {
        console.log(`Server is running on port ${PORT}`)
    })
})


