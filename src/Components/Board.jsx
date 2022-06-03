import React from "react";
import Cell from "./Cell";

function Board({ board }) {
// console.log(board);

  

  return (
    board && (
      <div className="board">
        {board.map((row, index) => (
          <React.Fragment key={index}>
            {row.map((cell) => (
              <Cell key={cell.position} cell={cell} />
            ))}
          </React.Fragment>
        ))}
      </div>
    )
  );
}

export default Board;
