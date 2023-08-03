import { Router, Request, Response } from "express"
import { addMovie, deleteMovie, getAllMovies, getMovieById, updateMovie } from "../controllers/movies.controllers"
import { checkMovieValidity } from "../middlewares/checkMovies.middleware"

const moviesRoutes = Router()


moviesRoutes.post("/:userId", addMovie)

moviesRoutes.get("/", getAllMovies)

moviesRoutes.get("/:movieId", getMovieById)

moviesRoutes.put("/:movieId", updateMovie)

moviesRoutes.delete("/:movieId", deleteMovie)

export default moviesRoutes