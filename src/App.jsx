import "./App.css";
import { useSelector } from "react-redux";
import { joke } from "./redux/selector.js";

function App() {
  // const currentJoke = useSelector(joke);
  // console.log("currentJoke", currentJoke);
  const currentJoke = {
    question: "What do you call a bear with no teeth?",
    answer: "A gummy bear",
  };
  const newJoke = () => {};
  const handleVote = (emoji) => {};
  return (
    <div className="container">
      <h1>Daily Emoji Joke</h1>
      <p>
        <b>Q:</b> {currentJoke.question}
      </p>
      <p>
        <b>A:</b> {currentJoke.answer}
      </p>
      <div>
        <button onClick={() => handleVote("👍")}></button>
      </div>
      <button onClick={newJoke}>Next Joke</button>
    </div>
  );
}

export default App;
