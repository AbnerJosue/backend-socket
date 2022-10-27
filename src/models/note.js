import { Schema, model } from "mongoose";

const noteSchema = new Schema({
  title: {
    type: String,
    require: true,
    trim: String,
  },
  description: {
    type: String,
    require: true,
    trim: String,
  },
  timestamps: true,
});

export default model("note", noteSchema);
