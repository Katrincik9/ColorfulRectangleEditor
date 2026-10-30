import { combineReducers, legacy_createStore } from "redux";
import { boxesReducer } from "./boxesReducer";

const rootReducer = combineReducers({ boxes: boxesReducer })
export const store = legacy_createStore(rootReducer)

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']