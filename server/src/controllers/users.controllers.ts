import { Request, Response } from "express";
import { IUserDocument, UserModel } from "../models/user.model";


export const createUser = async (req: Request, res: Response) => {

    const { name, email, password } = req.body;

    try {

        if (!name || !email || !password) {
            res.status(400).send({ error: "Missing one or more required fields" });
        }

        const newUser = await UserModel.create({
            name,
            email,
            password
        })

        res.status(201).send(newUser);


    } catch (error) {
        res.status(500).send(error);
    }
}

export const getAllUsers = async (req: Request, res: Response) => {

    try {

        const allUsers = await UserModel.find();

        res.status(201).send(allUsers);

    } catch (error) {

        res.status(500).send(error);
    }
}

export const getUserById = async (req: Request, res: Response) => {

    const { userId } = req.params;

    try {

        const requiredUser = await UserModel.findById({ _id: userId }).populate("movies");

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

        const updatedUser = await UserModel.findByIdAndUpdate({ _id: userId }, {
            $set: { name: name, email: email }
        }, { new: true });

        res.status(201).send(updatedUser);


    } catch (error) {
        res.status(500).send(error);
    }
}

export const deleteUser = async (req: Request, res: Response) => {

    const { userId } = req.params;

    try {

        const deletedUser = await UserModel.findByIdAndDelete({ _id: userId });
        res.status(200).send(deletedUser);

    } catch (error) {

        res.status(500).send(error);

    }
}