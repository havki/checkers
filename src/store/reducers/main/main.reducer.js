import { createSlice } from "@reduxjs/toolkit";
import { getCountries, getOneCountryData } from "./main.asyncActions";

export const mainSlice = createSlice({
  name: "main",
  initialState: {
    selectedMove: [],
  },
  reducers: {
   
    setSelectedMove: (state,action) =>{
      state.selectedMove.push(action.payload); //объект клика пуш 

    },
    
  },
 
});

export const {setSelectedChecker,setSelectedMove} = mainSlice.actions;
