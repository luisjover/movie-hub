
import express, { Application } from "express";
import usersRoutes from "./routes/users.routes";
import moviesRoutes from "./routes/movies.routes";
import morgan from "morgan";
import cors from "cors";

// initializations
const app: Application = express();

// settings
app.set("port", process.env.PORT || 8080);

// middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.use("/users", usersRoutes);
app.use("/movies", moviesRoutes);


export default app