import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
  return (
    <div>
      <Header />
      <div className="sm:mt-40 mt-32">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
