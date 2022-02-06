import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  AuthProvider,
  Layout,
  PublicPage,
  LoginPage,
  RequireAuth,
  ProtectedPage,
  NoMatchPage,
} from "./_components";

export default function Router() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <h1>Auth Example</h1>

        <p>
          This example demonstrates a simple login flow with three pages: a
          public page, a protected page, and a login page. In order to see the
          protected page, you must first login. Pretty standard stuff.
        </p>

        <p>
          First, visit the public page. Then, visit the protected page. You're
          not yet logged in, so you are redirected to the login page. After you
          login, you are redirected back to the protected page.
        </p>

        <p>
          Notice the URL change each time. If you click the back button at this
          point, would you expect to go back to the login page? No! You're
          already logged in. Try it out, and you'll see you go back to the page
          you visited just *before* logging in, the public page.
        </p>

        <Routes>
          <Route element={<Layout />}>
            <Route index element={<PublicPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/protected"
              element={
                <RequireAuth>
                  <ProtectedPage />
                </RequireAuth>
              }
            />
            <Route path="*" element={<NoMatchPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
