import React from "react";
import Navbar from "./Navbar";
import TopBar from "./TopBar";
import Footer from "./footer";

// Define the type for Layout props to include `children`
interface LayoutProps {
  children: React.ReactNode; // ReactNode allows any renderable content
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-[18rem,1fr] grid-rows-[auto,1fr,auto] min-h-screen">
      {/* Sidebar (Navbar) */}
      <div className="row-span-3">
        <Navbar />
      </div>

      {/* Header */}
      <div className="col-start-2 row-start-1">
        <TopBar />
      </div>

      {/* Main Content */}
      <main className="col-start-2 row-start-2 p-6 bg-gray-100">
        {children} {/* Render dynamic content here */}
      </main>

      {/* Footer */}
      <footer className="col-start-2 row-start-3 bg-light text-dark py-6">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
