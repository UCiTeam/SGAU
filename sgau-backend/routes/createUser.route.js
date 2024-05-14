import { Router } from "express";
import { createUserController } from "../controllers/createUser.controller.js";

const router = Router();

// Ruta para crear un nuevo usuario
router.post("/createUser", createUserController.createUser);

export default router;
