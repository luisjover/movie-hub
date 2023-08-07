import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export const addMovie = async (req: Request, res: Response) => {

    const { userId } = req.params;

    try {
        const newMovie = await prisma.movies.create({
            data: {
                title: req.body.title,
                year: req.body.year,
                cover_img: req.body.cover_img,
                score: req.body.score,
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
        const allMovies = await prisma.movies.findMany();
        res.status(201).send(allMovies);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const getMovieById = async (req: Request, res: Response) => {

    const { movieId } = req.params;

    try {
        const requiredMovie = await prisma.movies.findFirst({
            where: { id: movieId }
        });

        res.status(201).send(requiredMovie);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const updateMovie = async (req: Request, res: Response) => {

    const { movieId } = req.params;

    try {
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

    const { movieId } = req.params;

    try {
        const deletedMovie = prisma.movies.delete({
            where: { id: movieId }
        });

        res.status(200).send(deletedMovie);

    } catch (error) {

    }
}