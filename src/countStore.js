import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./countSlice";

export const countStore = configureStore({
    reducer:{
        count:countReducer
    }
})