
import express, { Application } from "express";
import usersRoutes from "./routes/users.routes";
import moviesRoutes from "./routes/movies.routes";
import genresRoutes from "./routes/genres.routes";
import morgan from "morgan";
import cors from "cors";
import fileUpload from 'express-fileupload';

// initializations
const app: Application = express();

// settings
app.set("port", process.env.PORT || 8080);

// middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './tmp/'
}))

// routes
app.use("/users", usersRoutes);
app.use("/movies", moviesRoutes);
app.use("/genres", genresRoutes);


export default app;