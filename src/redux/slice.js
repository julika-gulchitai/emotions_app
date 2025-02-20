import { createSlice } from "@reduxjs/toolkit";
import { fetchJoke } from "./operations.js";

export const jokeSlice = createSlice({
  name: "jokes",
  initialState: {
    jokeList: [],
    question: "",
    answer: "",
    votes: [],
    availableVotes: ["👍", "👎 "],
  },
  reducers: {
    vote: (state, action) => {
      const { label, value } = action.payload;
      const vote = state.votes.find((v) => v.label === label);
      if (vote) {
        vote.value += value;
      } else {
        state.votes.push({ label, value });
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJoke.fulfilled, (state, action) => {
        console.log("action", action);

        const { question, answer } = action.payload.data;

        state.question = question;
        state.answer = answer;
      })
      .addCase(fetchJoke.rejected, (state, action) => {});
  },
});
export const jokeReducer = jokeSlice.reducer;
