import { Request, Response } from "express";
import { MovieModel } from "../models/movie.model";
import { UserModel } from "../models/user.model";


export const addMovie = async (req: Request, res: Response) => {

    const { name, year, cover_img, score, genres } = req.body;
    const { userId } = req.params;

    try {
        const newMovie = await MovieModel.create({
            name,
            year,
            cover_img,
            score,
            genres
        });

        await UserModel.findByIdAndUpdate({ _id: userId }, {
            $push: { movies: newMovie._id }
        }, { new: true });

        res.status(201).send(newMovie);


    } catch (error) {
        res.status(500).send(error);
    }
}

export const getAllMovies = async (req: Request, res: Response) => {

    try {
        const allMovies = await MovieModel.find();
        res.status(201).send(allMovies);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const getMovieById = async (req: Request, res: Response) => {

    const { movieId } = req.params;

    try {
        const requiredMovie = await MovieModel.findById({ _id: movieId });
        res.status(201).send(requiredMovie);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const updateMovie = async (req: Request, res: Response) => {

    const { name, year, cover_img, score, genres } = req.body;
    const { movieId } = req.params;

    try {
        const updatedMovie = await MovieModel.findByIdAndUpdate({ _id: movieId }, {
            $set: { name: name, year: year, cover_img: cover_img, score: score, genres: genres }
        }, { new: true });
        res.status(201).send(updatedMovie);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const deleteMovie = (req: Request, res: Response) => {

    const { movieId } = req.params;

    try {
        const deletedMovie = MovieModel.findByIdAndDelete({ _id: movieId });
        res.status(200).send(deletedMovie);
    } catch (error) {

    }
}