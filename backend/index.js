import app from "./app.js";
import mongoose from "mongoose";
import "dotenv/config";

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

mongoose
  .connect(
    `mongodb+srv://${dbUser}:${dbPass}@cluster0.qgn4tk2.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(3001);
    console.log("API rodando na porta 3001");
  })
  .catch((err) => console.log(err));
