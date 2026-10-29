import { configureStore } from "@reduxjs/toolkit";
import { boxesSlice } from "./boxesSlice";

export const store = configureStore({
    reducer: {
        boxes : boxesSlice.reducer, 
    }
})