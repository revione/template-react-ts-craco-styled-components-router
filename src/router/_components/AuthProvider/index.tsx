// libraries
import { useState } from "react";
// components
import { fakeAuthProvider, AuthContext } from "../.";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  let [user, setUser] = useState<any>(null);

  let signin = (newUser: string, callback: VoidFunction) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser);
      callback();
    });
  };

  let signout = (callback: VoidFunction) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
