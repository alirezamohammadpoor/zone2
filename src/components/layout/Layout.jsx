import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function Layout() {
  return (
    <div className="layout">
      <header className="header">
        <NavBar />
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        <p>&copy; 2024 Zone 2. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Layout;
