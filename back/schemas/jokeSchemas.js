import Joi from "joi";

export const createJokeSchema = Joi.object({
  joke: Joi.string().required(),
  question: Joi.string().required(),
  answer: Joi.string().required(),
});
