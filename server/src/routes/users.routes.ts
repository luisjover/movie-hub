import { Router } from "express";
import { createUser, deleteUser, getAllUsers, getUserById, updateUser, } from "../controllers/users.controllers";

const usersRoutes = Router();


usersRoutes.post("/", createUser);

usersRoutes.get("/", getAllUsers);

usersRoutes.get("/:userId", getUserById);

usersRoutes.put("/:userId", updateUser);

usersRoutes.delete("/:userId", deleteUser);

export default usersRoutes;