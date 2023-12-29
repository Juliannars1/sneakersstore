import { Router } from "express";
import { getAllUsers, getUser, createUser } from "../controllers/users";

const router = Router();

router.get("/", getAllUsers);
router.get("/:id", getUser);
router.post("/", createUser);

export { router };
