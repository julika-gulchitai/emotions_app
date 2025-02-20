import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const api = axios.create({
  baseURL: "https://teehee.dev/api/joke",
});

export const fetchJoke = createAsyncThunk(
  "fetchJoke",
  async ({ id, question, answer }, thunkApi) => {
    try {
      return await api.get();
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
