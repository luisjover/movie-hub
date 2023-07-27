import { Request, Response } from "express"


export const addMovie = (req: Request, res: Response): void => {
    res.status(200).send("USER successfully CREATED")
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