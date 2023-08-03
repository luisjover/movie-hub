import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();



export const createUser = async (req: Request, res: Response) => {

    const { name, email, password } = req.body;

    try {

        if (!name || !email || !password) {
            res.status(400).send({ error: "Missing one or more required fields" });
        }

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

        const allUsers = await prisma.users.findMany();

        res.status(201).json(allUsers);

    } catch (error) {

        res.status(500).send(error);
    }
}

export const getUserById = async (req: Request, res: Response) => {

    const { userId } = req.params;

    try {

        const requiredUser = await prisma.users.findFirst({ where: { id: userId } }); //include: { movies: true };

        res.status(201).send(requiredUser);


    } catch (error) {
        res.status(500).send(error);
    }
}

export const updateUser = async (req: Request, res: Response) => {

    const { userId } = req.params;
    const { name, email } = req.body;
    try {

        if (!name || !email) {
            res.status(400).send({ error: "Missing one or more required fields" });
        }

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

    const { userId } = req.params;

    try {

        const deletedUser = await prisma.users.delete({
            where: { id: userId }
        });
        res.status(200).send(deletedUser);

    } catch (error) {

        res.status(500).send(error);

    }
}