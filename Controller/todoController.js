import todoCollection from "../Model/todoModel.js";
import { ObjectId } from "mongodb";

export const postTodo = async (req, res) => {
  console.log(req.body);
  try {
    const data = new todoCollection(req.body);
    const savedTodo = await data.save();
    res.status(201).json({
      message: "Data has been stored",
      todo: savedTodo,
    });
  } catch (error) {
    const statusCode = error.name === "ValidationError" ? 400 : 500;
    res.status(statusCode).json({ message: error.message });
  }
};

export const getTodo = async (req, res) => {
  try {
    const data = await todoCollection.find({ completed: false });
    console.log(data);
    return res.json({ message: data });
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

export const getCompletedTodo = async (req, res) => {
  try {
    const data = await todoCollection.find();
    console.log(data);
    return res.json({ message: data });
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

export const completeTodo = async (req, res) => {
  try {
    const id = req.query.id;

    const result = await todoCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { completed: true } },
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }

    return res.status(200).json({
      message: "Todo completed",
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};
