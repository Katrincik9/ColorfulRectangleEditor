import { combineReducers, legacy_createStore } from "redux";
import { boxesReducer } from "./boxesReducer";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/es/storage';

const persistConfig = {
    key: "root",
    storage
}

const rootReducer = combineReducers({ boxesReducer })
const persistentReducer = persistReducer(persistConfig, rootReducer)

export const store = legacy_createStore(persistentReducer)
export const persistor = persistStore(store)

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']