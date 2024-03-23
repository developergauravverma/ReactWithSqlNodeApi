import Express from "express";
import dotenv from "dotenv";
import { conn } from "./dbConfig/dbContext.js";
import morgan from "morgan";
import authRoute from "./Routes/authRoute.js";
import cors from "cors";
import postRoute from "./Routes/postRoute.js";

dotenv.config();

const app = Express();

app.use(Express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/posts", postRoute);

app.get("/", (req, res) => {
  res.send({
    message: "welcome  to our api",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server Running on Port=${PORT}`);
});

conn();
