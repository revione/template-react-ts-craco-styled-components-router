// libraries
import { Route } from "react-router-dom";
// components
import { PublicPage } from "..";

export function ProtectedPage() {
  return (
    <div>
      <h3>Protected</h3>
      <Route path="/" element={<PublicPage />} />
    </div>
  );
}
