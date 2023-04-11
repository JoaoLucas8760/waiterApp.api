import express from "express";
import mongoose from "mongoose";
import { router } from "./router";

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    console.log("connect ✔👌");

    const app = express();
    const port = 3001;

    app.use(express.json());

    app.use(router);

    app.listen(port, () => {
      console.log(`😜🐱‍👤 Servert started  at: http://localhost:${3001}`);
    });
  })
  .catch(() => console.log("error 😒"));
