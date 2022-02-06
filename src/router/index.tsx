// libraries
import { BrowserRouter, useRoutes } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
// components
import { AuthProvider, Layout, RequireAuth } from "./_components";
// pages
import {
  Counter,
  HomePage,
  LoginPage,
  ProtectedPage,
  NoMatchPage,
  CoursePage,
  CoursesIndexPage,
  CoursesPage,
} from "@src/pages";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/protected",
        element: (
          <RequireAuth>
            <ProtectedPage />
          </RequireAuth>
        ),
      },
      {
        path: "/counter",
        element: (
          <RequireAuth>
            <Counter />
          </RequireAuth>
        ),
      },
      {
        path: "/courses",
        element: (
          <RequireAuth>
            <CoursesPage />
          </RequireAuth>
        ),
        children: [
          { index: true, element: <CoursesIndexPage /> },
          { path: "/courses/:id", element: <CoursePage /> },
        ],
      },
      { path: "*", element: <NoMatchPage /> },
    ],
  },
];

function Routes() {
  return useRoutes(routes);
}

export default function Router() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <h1>Router</h1>

        <Routes />
      </AuthProvider>
    </BrowserRouter>
  );
}
