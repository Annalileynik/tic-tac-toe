import './App.css';
import {useState} from "react";
import Board from "./components/Board";

function App() {

  const [game, setGame]=useState(Array(9).fill(null))
const [symbol, setSymbol]=useState('X')
    const move = (value, index) => {
        if (value === null) {
            const newGame = game.map((elem, i) =>
                (i === index) ? symbol : elem)
            setSymbol((symbol === "X") ? "0" : "X")
            setGame(newGame)
        }
    }
  return (
    <div className="App">
      <h1> Tic tac toe </h1>
        <div>
            <Board game={game}
                   move={move}/>
        </div>
    </div>
  );
}

export default App;
