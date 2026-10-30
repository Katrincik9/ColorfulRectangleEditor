import { configureStore } from "@reduxjs/toolkit";
import { boxesReducer } from "./boxesReducer";

export const store = configureStore({ reducer: boxesReducer })

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']