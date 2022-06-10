import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Board from "./Components/Board";
import { BoardModel } from "./Models/BoardModel";
import {
  setSelectedMove,
  clearSelectedMove,
  setBoardtoStore,
  clearQueen,
} from "./store/reducers/main/main.reducer";

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
  const dispatch = useDispatch();
  const { selectedMove, choppedChecker, queen } = useSelector(
    (state) => state.main
  );
  const [board, setBoard] = useState(null);

  useEffect(() => {
    setBoard(boardArr);
  }, [boardArr]);
  
  useEffect(() => {
    dispatch(setBoardtoStore(board));
  }, [board]);

  useEffect(() => {
    if (board && selectedMove.length === 2) {
      let moved = board.map((item) => {
        return item.map((item) => {
          if (choppedChecker) {
            
            for (let i = 0; i < choppedChecker.length; i++) {
              const element = choppedChecker[i];
              if (choppedChecker && choppedChecker[i]?.x === item.x && choppedChecker[i]?.y === item.y) {
                item = { ...item, checkerColor: false };
                console.log('готово');
              }
              
            }
          }
          if (choppedChecker?.x === item.x && choppedChecker?.y === item.y) {
            item = { ...item, checkerColor: false };
          }
          if (item.position === selectedMove[0].position) {
            item = { ...selectedMove[0], checkerColor: false };
          }

          if (item.position === selectedMove[1].position) {
            queen || selectedMove[0].que 
              ? (item = {
                  ...selectedMove[1],
                  checkerColor: selectedMove[0].checkerColor,
                  que: true,
                })
              : (item = {
                  ...selectedMove[1],
                  checkerColor: selectedMove[0].checkerColor,
                });
          }
          return item;
        });
      });
      setBoard(moved);

      dispatch(setSelectedMove());
      dispatch(clearSelectedMove());
    }
    return () => {

     queen && dispatch(clearQueen());
    };
  }, [selectedMove, dispatch]);

  return (
    <div className="App">
      <Board board={board} />
    </div>
  );
}

export default App;
