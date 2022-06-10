import { createSlice, current } from "@reduxjs/toolkit";
import {} from "./main.asyncActions";
import comparer from "../../../helpers/comparer";
import bigComparer from "../../../helpers/bigComparer";
import queComparer from "../../../helpers/queComparer";

export const mainSlice = createSlice({
  name: "main",
  initialState: {
    board: null, //импорт доски из стейта App для проверки на шашку если рубишь
    selectedMove: [], // [0]-выбор [1]-ход
    whoseTurn: "white",
    choppedChecker: null,
    queen: null, // индикатор наступления на последнюю клетку
  },
  reducers: {
    setBoardtoStore: (state, action) => {
      state.board = action.payload;
    },
    clearSelectedMove: (state) => {
      state.selectedMove = [];
    },
    clearQueen: (state) => {
      state.queen = null;
    },
    setSelectedMove: (state, action) => {
      if (state.selectedMove.length === 1) {
        //если шашка выбрана: проверка на верность хода
        let prev = current(state.selectedMove[0]); // выбраная шашка
        const next = action.payload; //место хода
        let queRubic = 0;
        let cellsToClear = [];
        if (state.selectedMove[0].que) {
          let queMoveConfirm = 0;
          if (bigComparer(prev, next)) {
            const arrayOfCellsBetwQueenMove = queComparer(prev, next);
            let twoInRow = false
            let allCheckerColorsInLine = [];
            let Board =
              arrayOfCellsBetwQueenMove.orient === "down"
                ? state.board
                : state.board.reverse();
            Board.forEach((oneOfEightArr) => {
              for (let i = 0; i < oneOfEightArr.length; i++) {
                const item = oneOfEightArr[i];
                for (
                  let x = 0;
                  x < arrayOfCellsBetwQueenMove.line.length;
                  x++
                ) {
                  const cell = arrayOfCellsBetwQueenMove.line[x];
                  if (
                    cell !== undefined &&
                    cell?.y === item.y &&
                    cell?.x === item.x
                  ) {
                    allCheckerColorsInLine.push(item.checkerColor);
                    cellsToClear.push(cell);
                  }
                }
              }
            });
            if (!allCheckerColorsInLine.includes(prev.checkerColor)) {
              queRubic += 1
              queMoveConfirm += 1;
            }
            
            

            for (let i = 1; i < allCheckerColorsInLine.length; i++) {
              const prevElement = allCheckerColorsInLine[i-1];
              const element = allCheckerColorsInLine[i];
             if (prevElement===element && prevElement && element) {
              twoInRow = true 
              break;
             }
            }

            if (!twoInRow) {
              queRubic += 1
              queMoveConfirm += 1;

            }
            console.log(queRubic);
           
            
            // console.log(twoInRow,'twoInRow');
            // console.log(allCheckerColorsInLine.includes(prev.checkerColor));
            console.log(cellsToClear, arrayOfCellsBetwQueenMove.line);
            // console.log(allCheckerColorsInLine, "allCheckerColorsInLine");

          }
          if (!next.checkerColor) {
            queMoveConfirm += 1;
          }

          if (queMoveConfirm === 3 || queRubic===2){
            state.choppedChecker= cellsToClear
            state.selectedMove.push(action.payload);
          }
        }
        if (state.selectedMove[0].que === undefined) {
          let moveConfirm = 0;

          let rubic = false; //разрешение рубить
          console.log(prev, next);
          if (prev.checkerColor === "white" && next.y === 0) {
            state.queen = next;
          }
          if (prev.checkerColor === "black" && next.y === 7) {
            state.queen = next;
          }
          if (prev.checkerColor === next.checkerColor) {
            state.selectedMove.length = 0;
            state.selectedMove.push(next);
          }
          if (!next.checkerColor) {
            moveConfirm += 1;
          }
          if (
            //возможность рубить
            (prev.x === next.x - 2 && prev.y === next.y + 2) || // лево-вниз
            (prev.x === next.x + 2 && prev.y === next.y + 2) || // право-вниз
            (prev.x === next.x - 2 && prev.y === next.y - 2) || // лево-вверх
            (prev.x === next.x + 2 && prev.y === next.y - 2) // право-вверх
          ) {
            const cuttedChecker = comparer(prev, next);
            state.board.forEach((element) => {
              element.forEach((elem) => {
                if (
                  cuttedChecker?.x === elem.x &&
                  cuttedChecker?.y === elem.y &&
                  elem?.checkerColor !== state.selectedMove[0].checkerColor
                ) {
                  rubic = true;
                }
              });
            });
            if (rubic) {
              state.choppedChecker = comparer(prev, next);
              moveConfirm += 1;
            }
          }
          if (prev.checkerColor === "white") {
            //белые вверх
            if (
              (prev.x === next.x - 1 && prev.y === next.y + 1) || // лево-вниз
              (prev.x === next.x + 1 && prev.y === next.y + 1) // право-вниз
            ) {
              moveConfirm += 1;
            }
          }
          if (prev.checkerColor === "black") {
            //чёрные вниз
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
  clearQueen,
} = mainSlice.actions;
