import { Router } from "express";
import { getProductInStock, getProduct } from "../controllers/products";

const router = Router();

router.get("/", getProductInStock);
router.get("/:id", getProduct);
export { router };
