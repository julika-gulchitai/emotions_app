import "./App.css";
import { useSelector } from "react-redux";
import { joke } from "./redux/selector.js";

function App() {
  const currentJoke = useSelector(joke);
  console.log("currentJoke", currentJoke);

  const newJoke = () => {};
  const handleVote = (emoji) => {};
  return (
    <div className="container">
      {" "}
      {/* Use your CSS class */}
      <h1>Daily Emoji Joke</h1>
      <p>
        <b>Q:</b> {currentJoke.question}
      </p>
      <p>
        <b>A:</b> {currentJoke.answer}
      </p>
      <div>
        {joke.availableVotes.map((emoji) => (
          <button key={emoji} onClick={() => handleVote(emoji)}>
            {emoji}{" "}
            {currentJoke.votes.find((v) => v.label === emoji)?.value || 0}
          </button>
        ))}
      </div>
      <button onClick={newJoke}>Next Joke</button>
    </div>
  );
}

export default App;
