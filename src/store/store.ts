import { configureStore } from "@reduxjs/toolkit";
import { boxesSlice } from "./boxesSlice";

export const store = configureStore({
    reducer: {
        boxes : boxesSlice.reducer, 
    }
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']