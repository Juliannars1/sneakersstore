import { Schema, model } from "mongoose";
import { Product } from "../interface/product.interface";

const ProductSchema = new Schema<Product>({
  products_id: { type: String, required: true },
  name: { type: String, required: true },
  brand_id: { type: String, required: true },
  stock: { type: Number, required: true },
  price: { type: Number, required: true },
});

const ProductModel = model("products", ProductSchema);
export { ProductModel };
