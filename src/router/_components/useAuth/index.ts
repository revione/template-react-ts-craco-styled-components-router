// libraries
import { useContext } from "react";
// components
import { AuthContext } from "../.";

export function useAuth() {
  return useContext(AuthContext);
}
