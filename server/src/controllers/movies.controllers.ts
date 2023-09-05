import { Request, Response } from "express";
import prisma from "../db/clientPrisma";
import { adaptIdToDB } from "../utils/functions";
import { uploadImageToCloudinary } from "../utils/cloudinary";




export const addMovie = async (req: Request, res: Response) => {

    const { userId } = req.params;
    const parsedId = adaptIdToDB(userId);

    try {

        if ((req.files as any)?.cover_img) {
            const cloudAsset = await uploadImageToCloudinary((req.files as any).cover_img.tempFilePath);

            //@ts-ignore
            const newMovie = await prisma.movies.create({
                data: {
                    title: req.body.title,
                    year: req.body.year,
                    cover_img: cloudAsset.secure_url,
                    score: req.body.score,
                    genres: req.body.genre,
                    Users: {
                        connect: {
                            id: parsedId
                        }
                    }
                }
            })
            res.status(201).json(newMovie);
        } else {
            res.status(400).send("file not provided")
        }


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

    const { movieId } = req.params;
    const parsedId = adaptIdToDB(movieId);

    try {

        //@ts-ignore
        const requiredMovie = await prisma.movies.findFirst({
            where: { id: parsedId }
        });

        res.status(201).send(requiredMovie);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const updateMovie = async (req: Request, res: Response) => {

    const { movieId } = req.params;
    const parsedId = adaptIdToDB(movieId);

    try {

        if ((req.files as any)?.cover_img) {
            const cloudAsset = await uploadImageToCloudinary((req.files as any).cover_img.tempFilePath);

            //@ts-ignore
            const updatedMovie = await prisma.movies.update({
                where: { id: parsedId },
                data: {
                    title: req.body.title,
                    year: req.body.year,
                    cover_img: cloudAsset.secure_url,
                    score: req.body.score,
                    genres: req.body.genre
                }
            });

            res.status(201).send(updatedMovie);
        }

    } catch (error) {
        res.status(500).send(error);
    }

}

export const deleteMovie = (req: Request, res: Response) => {

    const { movieId } = req.params;
    const parsedId = adaptIdToDB(movieId);

    try {

        //@ts-ignore
        const deletedMovie = prisma.movies.delete({
            where: { id: parsedId }
        });

        res.status(200).send(deletedMovie);

    } catch (error) {

    }
}