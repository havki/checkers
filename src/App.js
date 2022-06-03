import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Board from "./Components/Board";
import { BoardModel } from "./Models/BoardModel";

const cells = [];

for (let i = 0; i < 64; i++) {
  cells.push({
    color: (Math.floor(i / 8) + i) % 2 ? "black" : "white",
    x: i % 8,
    y: ~~(i / 8),
  });
}

const boardArr = BoardModel();
function App() {
  const { selectedMove } = useSelector((state) => state.main);
  const [board, setBoard] = useState(null);

  useEffect(() => {
    if (board && selectedMove.length > 1) {
      let moved = board.map((item) => {
        return item.map((item) => {
          if (item.position === selectedMove[0]) item = { ...selectedMove[0], checker: false };

          if (item.position=== selectedMove[1]) item = { ...selectedMove[1], checker: selectedMove[0].checker }
          
        });
      });
    }
  }, [selectedMove]);

  useEffect(() => {
    setBoard(boardArr);
  }, [boardArr]);

  return (
    <div className="App">
      <Board board={board} />
    </div>
  );
}

export default App;
