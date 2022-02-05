import {
  TypedUseSelectorHook,
  useSelector as useSelectorRedux,
  useDispatch as useDispatchRedux,
} from "react-redux";
import type { Store, Dispatch } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useDispatch = () => useDispatchRedux<Dispatch>();
export const useSelector: TypedUseSelectorHook<Store> = useSelectorRedux;
