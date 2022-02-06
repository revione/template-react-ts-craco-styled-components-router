import { Outlet } from "react-router-dom";

export function CoursesPage() {
  return (
    <div>
      <h2>Courses</h2>
      <Outlet />
    </div>
  );
}
