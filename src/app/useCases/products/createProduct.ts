import { Request, Response } from "express";
import { Product } from "../../models/Product";

export async function createProducts(req: Request, res: Response) {
  try {
    const products = await Product.create();

    console.log(req.body);

    res.json("ok");
  } catch {
    res.sendStatus(500);
  }
}
