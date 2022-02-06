// libraries
import { Outlet } from "react-router-dom";
// components
import { AuthStatus } from "../.";
import { Link } from "@components";

export function Layout() {
  return (
    <div>
      <AuthStatus />

      <ul>
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
        <li>
          <Link to="/courses">Courses protected Page</Link>
        </li>
        <li>
          <Link to="/counter">Counter protected Page</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}
