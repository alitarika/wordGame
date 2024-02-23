import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { wordRoutes } from "./routes/wordRoutes.js";
import { userRoutes } from "./routes/userRoutes.js";

const app = express();
dotenv.config();

const { PORT, MONGODBURL } = process.env;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/words", wordRoutes);
app.use("/api/users", userRoutes);

mongoose
  .connect(MONGODBURL)
  .then(() => {
    console.log("Successfully connected to DB");
    app.listen(PORT, () => {
      console.log(`listening on ${PORT}`);
    });
  })
  .catch((error) => console.error(error));
