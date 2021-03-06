// libraries
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import reducers from "./reducers"

export const isDevelopment = Boolean(process.env.NODE_ENV === "development")

export const store = configureStore({
  reducer: reducers,
})

export type Dispatch = typeof store.dispatch
export type Store = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  Store,
  unknown,
  Action<string>
>

export default store
