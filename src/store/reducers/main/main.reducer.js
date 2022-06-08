import { createSlice, current } from "@reduxjs/toolkit";
import {} from "./main.asyncActions";
import comparer from '../../../helpers/comparer'

export const mainSlice = createSlice({
  name: "main",
  initialState: {
    board: null,            //импорт доски из стейта App для проверки на шашку если рубишь
    selectedMove: [],       // [0]-выбор [1]-ход
    whoseTurn: "white",
    choppedChecker:null, 
    queen:null,
  },
  reducers: {
    setBoardtoStore: (state, action) => {
      state.board = action.payload;
    },
    clearSelectedMove: (state) => {
      state.selectedMove = [];
    },
    clearQueen: (state) => {
      state.queen= null
    },
    setSelectedMove: (state, action) => {
      
      if (state.selectedMove.length === 1) {        //если шашка выбрана: проверка на верность хода
        let moveConfirm = 0;
        let rubic = false;                          //разрешение рубить      
        let prev = current(state.selectedMove[0]);  // выбраная шашка
        const next = action.payload;                //место хода
        console.log(prev, next);
        if (prev.checkerColor === state.whoseTurn && next.y === 0) {
          state.queen = next
        }
        if (prev.checkerColor === next.checkerColor) {  
          state.selectedMove.length = 0;
          state.selectedMove.push(next);
        }
        if (!next.checkerColor) {
          moveConfirm += 1;
        }
        if (                                                                    //возможность рубить
          (prev.x === next.x - 2 && prev.y === next.y + 2) || // лево-вниз
          (prev.x === next.x + 2 && prev.y === next.y + 2) || // право-вниз
          (prev.x === next.x - 2 && prev.y === next.y - 2) || // лево-вверх
          (prev.x === next.x + 2 && prev.y === next.y - 2) // право-вверх
        ) {
          const cuttedChecker = comparer(prev,next)
          state.board.forEach(element => {
              element.forEach(e=>{
                if(cuttedChecker?.x===e.x && cuttedChecker?.y===e.y && e?.checkerColor && e?.checkerColor!==state.selectedMove[0].checkerColor){
                    rubic = true
                }
              })
          });
          if(rubic){
            state.choppedChecker = comparer(prev,next)
            moveConfirm+=1
          }
        }
        if (prev.checkerColor === "white") {                                      //белые вверх 
          if (
            (prev.x === next.x - 1 && prev.y === next.y + 1) || // лево-вниз
            (prev.x === next.x + 1 && prev.y === next.y + 1) // право-вниз
          ) {
            moveConfirm += 1;
          }
        }
        if (prev.checkerColor === "black") {                                     //чёрные вниз
          if (
            (prev.x === next.x - 1 && prev.y === next.y - 1) || // лево-вверх
            (prev.x === next.x + 1 && prev.y === next.y - 1) // право-вверх
          ) {
            moveConfirm += 1;
          }
        }

        moveConfirm === 2 && state.selectedMove.push(action.payload);
        console.log(rubic, moveConfirm);
      }
      if (!state.selectedMove.length) {
        state.selectedMove.push(action.payload); //объект клика пуш
      }
    },
  },
});

export const {
  clearSelectedMove,
  setSelectedChecker,
  setSelectedMove,
  setBoardtoStore,
  clearQueen
} = mainSlice.actions;

