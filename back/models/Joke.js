import { Schema, model } from "mongoose";
import { handleSaveError, setUpdateSetting } from "./hooks.js";

const jokeSchema = new Schema(
  {
    joke: {
      type: String,
      required: [true, "Joke is required"],
      unique: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

jokeSchema.post("save", handleSaveError);
jokeSchema.pre("findOneAndUpdate", setUpdateSetting);
jokeSchema.post("findOneAndUpdate", handleSaveError);
export const Joke = model("joke", jokeSchema);
