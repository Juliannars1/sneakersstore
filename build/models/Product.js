"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const productSchema = new mongoose_1.default.Schema({
    nombre: { type: String, required: true },
    marca: { type: String, required: true },
    precio_base: { type: Number, required: true },
    en_stock: { type: Boolean, default: true },
});
const ProductModel = mongoose_1.default.model("Products", productSchema);
exports.default = ProductModel;
