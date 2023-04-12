import path from "node:path";
import express from "express";
import mongoose from "mongoose";
import { router } from "./router";

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    const app = express();
    console.log("connect ✔👌");

    app.use(
      "/uploads",
      express.static(path.resolve(__dirname, "..", "uploads"))
    );

    const port = 3001;

    app.use(express.json());

    app.use(router);

    app.listen(port, () => {
      console.log(`😜🐱‍👤 Servert started  at: http://localhost:${3001}`);
    });
  })
  .catch(() => console.log("error 😒"));
