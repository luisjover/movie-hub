import { Router, Request, Response } from "express"
import { addMovie, deleteMovie, getAllMovies, getMovieById, updateMovie } from "../controllers/movies.controllers"

const moviesRoutes = Router()


moviesRoutes.get("/", getAllMovies)

moviesRoutes.get("/:movieId", getMovieById)

moviesRoutes.post("/", addMovie)

moviesRoutes.put("/:movieId", updateMovie)

moviesRoutes.delete("/", deleteMovie)

export default moviesRoutes