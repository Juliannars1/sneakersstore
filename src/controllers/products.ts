import { Request, Response } from "express";
import { getProductsInStock, getProductbyId } from "../services/products";
import { catchAsync } from "../utils/catchedAsync";

const getProductInStock = catchAsync(async (_req: Request, res: Response) => {
  const products = await getProductsInStock();
  res.send(products);
});
const getProduct = catchAsync(async ({ params }: Request, res: Response) => {
  const { id } = params;
  const product = await getProductbyId(id);
  res.send(product);
});

export { getProductInStock, getProduct };
