
import express, { Application } from "express"
import usersRoutes from "./routes/users.routes";
import moviesRoutes from "./routes/movies.routes";

const app: Application = express();
app.use(express.json())


app.use("/users", usersRoutes)
app.use("/movies", moviesRoutes)

export default app