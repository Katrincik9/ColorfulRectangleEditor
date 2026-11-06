import { boxesSlice } from "./boxesReducer";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import { configureStore, combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
    key: "root",
    storage
}

const rootReducer = combineReducers({
    boxesReducer: boxesSlice.reducer,
})
const persistentReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistentReducer,
})
export const persistor = persistStore(store)

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']