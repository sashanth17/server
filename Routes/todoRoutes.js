import {
  postTodo,
  getTodo,
  completeTodo,
  getCompletedTodo,
} from "../Controller/todoController.js";

import express from "express";

const route = express.Router();

route.post("", postTodo);
route.get("", getTodo);
route.patch("", completeTodo);
route.get("/completed", getCompletedTodo);

export default route;
