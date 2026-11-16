import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
  todo: { type: String, require: true },
  completed: { type: Boolean, default: false },
});

const todoCollection = mongoose.model("todos", todoSchema);

export default todoCollection;
