// This is the main component of the application. It renders the Board component. All compoenents are functional components. The Game component uses the useState hook to manage the state of the game. The Board component uses the calculateWinner function to determine the winner of the game. The Board component also uses the useState hook to manage the state of the game. The Square component is a functional component that renders a button. The Square component uses the useState hook to manage the state of the button. The calculateWinner function is a pure function that takes an array of squares and returns the winner of the game. The calculateWinner function
import "./App.css";
import Game from "./Game";

function App() {
  return <Game />;
}

export default App;
