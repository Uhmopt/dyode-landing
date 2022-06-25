import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <div>
      <Header />
      <div className="mt-40">
        <Outlet />
      </div>
    </div>
  );
}
