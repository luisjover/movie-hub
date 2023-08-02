import config from "./config/config";
import app from "./server";

// PORT
const PORT = config.app.PORT





app.listen(PORT, (): void => {
    console.log(`Server is running on port ${PORT}`)
})