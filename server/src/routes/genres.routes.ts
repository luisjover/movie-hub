import { Router } from 'express';
import { createGenre, deleteGenreByName, getAllGenres, getGenreByName, updateGenreByName } from '../controllers/genres.controllers';

const GenresRouter: Router = Router();

GenresRouter.post("/", createGenre)

GenresRouter.get("/", getAllGenres)

GenresRouter.get("/:genreId", getGenreByName)

GenresRouter.patch("/:genreId", updateGenreByName)

GenresRouter.delete("/:genreId", deleteGenreByName)


export default GenresRouter;