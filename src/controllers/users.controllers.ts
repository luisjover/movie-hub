import { Request, Response } from "express"


export const createUser = (req: Request, res: Response): void => {
    res.status(200).send("USER successfully CREATED")
}

export const getAllUsers = (req: Request, res: Response): void => {
    res.status(200).send("ALL USERS successfully RECEIVED")
}


export const getUserById = (req: Request, res: Response): void => {
    res.status(200).send("USER successfully RECEIVED")
}

export const updateUser = (req: Request, res: Response): void => {
    res.status(200).send("USER successfully UPDATED")
}

export const deleteUser = (req: Request, res: Response): void => {
    res.status(200).send("USER successfully DELETED")
}