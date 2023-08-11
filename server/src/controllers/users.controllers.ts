import { Request, Response } from "express";
import prisma from "../db/clientPrisma";
import { adaptIdToDB } from "../utils/functions";





export const createUser = async (req: Request, res: Response) => {

    const { name, email, password } = req.body;

    try {

        if (!name || !email || !password) {
            res.status(400).send({ error: "Missing one or more required fields" });
        }

        //@ts-ignore
        const newUser = await prisma.users.create({
            data: { name, email, password }
        })

        res.status(201).send(newUser);


    } catch (error) {
        res.status(500).send(error);
    }
}

export const getAllUsers = async (req: Request, res: Response) => {

    try {

        //@ts-ignore
        const allUsers = await prisma.users.findMany();

        res.status(201).json(allUsers);

    } catch (error) {

        res.status(500).send(error);
    }
}

export const getUserById = async (req: Request, res: Response) => {

    const { id } = req.params;
    const userId = adaptIdToDB(id);

    try {

        //@ts-ignore
        const requiredUser = await prisma.users.findUnique({
            where: {
                id: userId
            },
            include: {
                movies: true
            }
        });

        // 
        res.status(201).send(requiredUser);


    } catch (error) {
        res.status(500).send(error);
    }
}

export const updateUser = async (req: Request, res: Response) => {

    const { id } = req.params;
    const userId = adaptIdToDB(id);
    const { name, email } = req.body;
    try {

        if (!name || !email) {
            res.status(400).send({ error: "Missing one or more required fields" });
        }

        //@ts-ignore
        const updatedUser = await prisma.users.update({
            where: { id: userId },
            data: { name, email }

        });

        res.status(201).send(updatedUser);


    } catch (error) {
        res.status(500).send(error);
    }
}

export const deleteUser = async (req: Request, res: Response) => {

    const { id } = req.params;
    const userId = adaptIdToDB(id);

    try {

        //@ts-ignore
        const deletedUser = await prisma.users.delete({
            where: { id: userId }
        });
        res.status(200).send(deletedUser);

    } catch (error) {

        res.status(500).send(error);

    }
}