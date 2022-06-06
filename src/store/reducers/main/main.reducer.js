import { createSlice, current } from "@reduxjs/toolkit";
import {} from "./main.asyncActions";
import comparer from '../../../helpers/comparer'

export const mainSlice = createSlice({
  name: "main",
  initialState: {
    selectedMove: [],
    whoseTurn: "white",
    board: null,
  },
  reducers: {
    setBoardtoStore: (state, action) => {
      state.board = action.payload;
    },
    clearSelectedMove: (state) => {
      state.selectedMove = [];
    },
    setSelectedMove: (state, action) => {
      if (state.selectedMove.length === 1) {
        //если шашка выбрана: проверка на верность хода
        let moveConfirm = 0;
        let rubic = false;
        let prev = current(state.selectedMove[0]);
        const next = action.payload;
        console.log(prev, next);
        if (prev.checkerColor === next.checkerColor) {
          state.selectedMove.length = 0;
          state.selectedMove.push(next);
        }
        if (!next.checkerColor) {
          moveConfirm += 1;
        }

        console.log(comparer(prev,next)); 
        if (                                                                    //возможность рубить
          (prev.x === next.x - 2 && prev.y === next.y + 2) || // лево-вниз
          (prev.x === next.x + 2 && prev.y === next.y + 2) || // право-вниз
          (prev.x === next.x - 2 && prev.y === next.y - 2) || // лево-вверх
          (prev.x === next.x + 2 && prev.y === next.y - 2) // право-вверх
        ) {
          // console.log(prev.x);
          moveConfirm+=1
        }
        if (prev.checkerColor === "white") {
          if (
            (prev.x === next.x - 1 && prev.y === next.y + 1) || // лево-вниз
            (prev.x === next.x + 1 && prev.y === next.y + 1) // право-вниз
          ) {
            moveConfirm += 1;
          }
        }
        if (prev.checkerColor === "black") {
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
} = mainSlice.actions;

// switch ("ads") {
        //   case 0:
        //     rubic = "ld";
        //     break;
        //   case 1:
        //     rubic = "rd";
        //     break;
        //   case 2:
        //     rubic = "lt";
        //     break;
        //   case 3:
        //     rubic = "rt";
        //     break;
        //   default:
        //     break;
        // }