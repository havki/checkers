import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedMove } from "../store/reducers/main/main.reducer";

function Cell({ cell }) {
  const dispatch = useDispatch();
  const {selectedMove} = useSelector(state => state.main)
  const { color, checkerColor } = cell;
  const clickHandler = (e) => {
    e.stopPropagation()                   //возможно не надо  
    dispatch(setSelectedMove(cell));
  };
  
  if (color === "black") {
    return (
     
      <div onClick={selectedMove.length ? (e) => clickHandler(e): null}  className="cell black">
        {checkerColor === "white" && (
          <div onClick={(e) => clickHandler(e)} className="checker-white"></div>
        )}
        {checkerColor === "black" && (
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
