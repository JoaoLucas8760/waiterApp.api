import path from "node:path";
import { Router } from "express";
import multer from "multer";

import { listCategories } from "./app/useCases/categories/listCategories";
import { createCategory } from "./app/useCases/categories/createCategory";
import { listProducts } from "./app/useCases/products/listProdutcts";
import { createProducts } from "./app/useCases/products/createProduct";

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, "..", "uploads"));
    },
  }),
});

router.get("/categories", listCategories);

router.post("/categories", createCategory);

router.get("/products", listProducts);

router.post("/products", upload.single("image"), createProducts);

router.get("/categories/:categoryId/products", (req, res) => {
  res.send("ok");
});

router.get("/orders", (req, res) => {
  res.send("ok");
});

router.post("/orders", (req, res) => {
  res.send("ok");
});

router.patch("/orders/:order:Id", (req, res) => {
  res.send("ok");
});

router.delete("/orders/:order:Id", (req, res) => {
  res.send("ok");
});
