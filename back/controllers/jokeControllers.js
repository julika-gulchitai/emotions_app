import * as jokeService from "../services/jokesServices.js";
import HttpError from "../helpers/HttpError.js";
import ctrWrapper from "../decorators/ctrWrapper.js";

export const getAllJokes = async (req, res) => {
  const result = await jokeService.getAllJokes();
  res.json(result);
};

export const getOneJoke = async (req, res) => {
  const { id } = req.params;

  const result = await jokeService.getOneJokeByFilter({
    _id: id,
  });
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

export const deleteJoke = async (req, res) => {
  const { id } = req.params;

  const result = await jokeService.removeJokeById({
    _id: id,
  });
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

export default {
  getAllJokes: ctrWrapper(getAllJokes),
  getOneJoke: ctrWrapper(getOneJoke),
  deleteJoke: ctrWrapper(deleteJoke),
};
