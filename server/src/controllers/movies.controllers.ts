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

export const getAllMovies = (req: Request, res: Response): void => {
    res.status(200).send("ALL USERS successfully RECEIVED")
}


export const getMovieById = (req: Request, res: Response): void => {
    res.status(200).send("USER successfully RECEIVED")
}

export const updateMovie = (req: Request, res: Response): void => {
    res.status(200).send("USER successfully UPDATED")
}

export const deleteMovie = (req: Request, res: Response): void => {
    res.status(200).send("USER successfully DELETED")
}