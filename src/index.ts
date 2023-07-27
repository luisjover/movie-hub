import config from "./config/config";
import app from "./server";

const PORT = config.app.PORT

app.listen(PORT, (): void => {
    console.log(`Server is running on port ${PORT}`)
})