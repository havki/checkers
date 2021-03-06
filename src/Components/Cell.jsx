import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQueenMove, setSelectedMove } from "../store/reducers/main/main.reducer";

function Cell({ cell }) {
  const dispatch = useDispatch();
  const { selectedMove,whoseTurn } = useSelector((state) => state.main);
  const { color, checkerColor, que } = cell;
  const clickHandler = (e) => {
    e.stopPropagation(); //возможно не надо
    dispatch(setSelectedMove(cell))
   
    
  };


  
  if (color === "black" && que) {
    return (
      <div
        onClick={selectedMove.length ? (e) => clickHandler(e) : null}
        className="cell black"
      >
        {checkerColor === "white" && (
          <div onClick={whoseTurn === 'white' ? (e) => clickHandler(e) : null} className="checker-white__que"></div>
        )}
        {checkerColor === "black" && (
          <div onClick={whoseTurn === 'black' ? (e) => clickHandler(e) : null} className="checker-black__que"></div>
        )}
      </div>
    );
  }

  if (color === "black") {
    return (
      <div
        onClick={selectedMove.length ? (e) => clickHandler(e) : null}
        className="cell black"
      >
        {checkerColor === "white" && (
          <div onClick={whoseTurn === 'white' ? (e) => clickHandler(e) : null} className="checker-white"></div>
        )}
        {checkerColor === "black" && (
          <div onClick={whoseTurn === 'black' ? (e) => clickHandler(e) : null} className="checker-black"></div>
        )}
      </div>
    );
  }
  if (color === "white") {
    return <div className="cell white"></div>;
  }
}

export default Cell;
