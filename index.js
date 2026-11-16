import express, { response } from "express";
import dotenv from "dotenv";
import cors from "cors";

import db from "./Db/db.js";
import route from "./Routes/todoRoutes.js";

dotenv.config();
db();

const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());

app.use(cors());
app.use("/todo", route);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log("my server is running at :" + port);
});
