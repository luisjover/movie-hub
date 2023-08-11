import { Request, Response } from "express";
import prisma from "../db/clientPrisma";
import { adaptIdToDB } from "../utils/functions";




export const addMovie = async (req: Request, res: Response) => {

    const { id } = req.params;
    const userId = adaptIdToDB(id);

    try {

        //@ts-ignore
        const newMovie = await prisma.movies.create({
            data: {
                title: req.body.title,
                year: req.body.year,
                cover_img: req.body.cover_img,
                score: req.body.score,
                genres: req.body.genres,
                Users: {
                    connect: {
                        id: userId
                    }
                }
            }
        });



        res.status(201).json(newMovie);


    } catch (error) {
        res.status(500).send(error);
    }
}

export const getAllMovies = async (req: Request, res: Response) => {

    try {

        //@ts-ignore
        const allMovies = await prisma.movies.findMany();
        res.status(201).send(allMovies);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const getMovieById = async (req: Request, res: Response) => {

    const { id } = req.params;
    const movieId = adaptIdToDB(id);

    try {

        //@ts-ignore
        const requiredMovie = await prisma.movies.findFirst({
            where: { id: movieId }
        });

        res.status(201).send(requiredMovie);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const updateMovie = async (req: Request, res: Response) => {

    const { id } = req.params;
    const movieId = adaptIdToDB(id);

    try {

        //@ts-ignore
        const updatedMovie = await prisma.movies.update({
            where: { id: movieId },
            data: req.body
        });

        res.status(201).send(updatedMovie);

    } catch (error) {
        res.status(500).send(error);
    }
}

export const deleteMovie = (req: Request, res: Response) => {

    const { id } = req.params;
    const movieId = adaptIdToDB(id);

    try {

        //@ts-ignore
        const deletedMovie = prisma.movies.delete({
            where: { id: movieId }
        });

        res.status(200).send(deletedMovie);

    } catch (error) {

    }
}