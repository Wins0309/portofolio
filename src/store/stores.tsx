import { createStore } from "redux"
import { thunk } from "redux-thunk"
import rootReducer from "./reducers"
import { TypedUseSelectorHook, useSelector } from "react-redux"

// creating store
export const store = createStore(rootReducer)
export type RootState = ReturnType<typeof store.getState>
export const appSelector: TypedUseSelectorHook<RootState> = useSelector


