import { ProductModel } from "../models/products";

const getProductsInStock = async () => {
  const responseProduct = await ProductModel.find({ stock: { $ne: 0 } });
  return responseProduct;
};
const getProductbyId = async (id: string) => {
  const responseProduct = await ProductModel.find({ products_id: id });
  return responseProduct;
};
export { getProductsInStock, getProductbyId };
