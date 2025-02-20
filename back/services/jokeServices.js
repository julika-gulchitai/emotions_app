import { Joke } from "../models/Contact.js";

export const listJokes = () => Joke.find();

export const getOneJokeByFilter = async (filter) => Joke.findOne(filter);

export const removeJokeById = async (id) => Joke.findOne(id);

export const addJoke = async (data) => Joke.create(data);
