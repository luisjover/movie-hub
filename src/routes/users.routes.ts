import { Router, Request, Response } from "express"
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from "../controllers/users.controllers"

const usersRoutes = Router()


usersRoutes.get("/", getAllUsers)

usersRoutes.get("/:userId", getUserById)

usersRoutes.post("/", createUser)

usersRoutes.put("/:userId", updateUser)

usersRoutes.delete("/", deleteUser)

export default usersRoutes