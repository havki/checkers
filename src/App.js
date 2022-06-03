import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Board from "./Components/Board";
import { BoardModel } from "./Models/BoardModel";
import { setSelectedMove } from "./store/reducers/main/main.reducer";

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
  const dispatch = useDispatch()
  const { selectedMove } = useSelector((state) => state.main);
  const [board, setBoard] = useState(null);

  useEffect(() => {
    if (board && selectedMove.length > 1) {
      let moved = board.map((item) => {
        return item.map((item) => {
          if (item.position === selectedMove[0].position) {
            item = { ...selectedMove[0], checkerColor: false };
          }

          if (item.position === selectedMove[1].position) {
            item = {
              ...selectedMove[1],
              checkerColor: selectedMove[0].checkerColor,
            };
          }
          return item;
        });
      });
      setBoard(moved)
    }
    if(selectedMove.length===2){
      dispatch(setSelectedMove())

    }
  }, [selectedMove,dispatch]);

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
