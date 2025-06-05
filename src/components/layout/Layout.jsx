// Import necessary components and styles
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import "./Layout.css";

// Main layout component that wraps all pages
function Layout() {
  return (
    <div className="layout">
      {/* Header section containing navigation */}
      <header className="header">
        <NavBar />
      </header>

      {/* Main content area - renders child routes */}
      <main className="main-content">
        <Outlet />
      </main>

      {/* Footer with copyright information */}
      <footer className="footer">
        <p>&copy; 2024 Zone 2. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Layout;
