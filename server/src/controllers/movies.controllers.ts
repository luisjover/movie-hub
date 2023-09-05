import { Request, Response } from "express";
import prisma from "../db/clientPrisma";
import { adaptIdToDB } from "../utils/functions";
import { uploadImageToCloudinary } from "../utils/cloudinary";
import fs from 'fs-extra';




export const addMovie = async (req: Request, res: Response) => {

    const { userId } = req.params;
    const parsedId = adaptIdToDB(userId);
    console.log(req.body)

    try {

        if ((req.files as any)?.image) {

            const cloudAsset = await uploadImageToCloudinary((req.files as any).image.tempFilePath);
            await fs.unlink((req.files as any).image.tempFilePath);

            //@ts-ignore
            const newMovie = await prisma.movies.create({
                data: {
                    title: req.body.title,
                    year: parseInt(req.body.year),
                    score: parseInt(req.body.score),
                    Genres: {
                        connect: {
                            name: req.body.genre
                        }
                    },
                    cover_img: cloudAsset.secure_url,
                    cover_img_public: cloudAsset.public_id,
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
        console.log(error)
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

        if ((req.files as any)?.image) {

            const cloudAsset = await uploadImageToCloudinary((req.files as any).image.tempFilePath);

            //@ts-ignore
            const updatedMovie = await prisma.movies.update({
                where: { id: parsedId },
                data: {
                    title: req.body.title,
                    year: parseInt(req.body.year),
                    score: parseInt(req.body.score),
                    Genres: {
                        connect: {
                            name: req.body.genre
                        }
                    },
                    cover_img: cloudAsset.secure_url,
                    cover_img_public: cloudAsset.public_id
                }
            });

            console.log(updatedMovie)

            res.status(201).send(updatedMovie);
        }

    } catch (error) {
        res.status(500).send(error);
        console.log(error)
    }

}

export const deleteMovie = async (req: Request, res: Response) => {

    console.log("entering on deleteMovie on backend")
    const { movieId } = req.params;
    const parsedId = adaptIdToDB(movieId);

    try {

        //@ts-ignore
        const deletedMovie = await prisma.movies.delete({
            where: { id: parsedId }
        });
        console.log(deletedMovie)

        res.status(200).send(deletedMovie);


    } catch (error) {
        res.status(500).send(error);
        console.log(error)
    }
}