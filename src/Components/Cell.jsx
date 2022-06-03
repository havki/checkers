import React from "react";
import { useDispatch } from "react-redux";
import { setSelectedMove } from "../store/reducers/main/main.reducer";

function Cell({ cell }) {
  const dispatch = useDispatch();
  const { color, checker } = cell;
  const clickHandler = (e) => {
    e.stopPropagation()
    dispatch(setSelectedMove(cell));
  };

  if (color === "black") {
    return (
      <div onClick={(e) => clickHandler(e)} className="cell black">
        {checker === "white" && (
          <div onClick={(e) => clickHandler(e)} className="checker-white"></div>
        )}
        {checker === "black" && (
          <div onClick={(e) => clickHandler(e)} className="checker-black"></div>
        )}
      </div>
    );
  }
  if (color === "white") {
    return <div className="cell white"></div>;
  }
}

export default Cell;
