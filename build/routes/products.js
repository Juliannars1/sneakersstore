"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const products_1 = require("../controllers/products");
// import productController from "../controllers/productController";
const router = (0, express_1.Router)();
exports.router = router;
// router.get("/", productController);
// router.get("/price/:user_id/:nombre_producto", priceController.getPrice);
router.get("/", products_1.getProducts);