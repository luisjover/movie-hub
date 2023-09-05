import { Router } from "express";
import { createUser, deleteUser, getAllUsers, getUserByEmail, updateUser, } from "../controllers/users.controllers";
import { checkJwtMiddleware } from "../middlewares/checkJwt.middleware";

const usersRoutes = Router();


usersRoutes.post("/", createUser);

usersRoutes.get("/", getAllUsers);

usersRoutes.get("/:userEmail", getUserByEmail);

usersRoutes.put("/:userEmail", updateUser);

usersRoutes.delete("/:userEmail", deleteUser);

export default usersRoutes;