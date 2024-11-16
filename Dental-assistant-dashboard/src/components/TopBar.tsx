// src/components/TopBar.tsx

import React from "react";
import logo from "../assets/aloai.png";

const TopBar= () => {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-dark text-white shadow-md z-50 ">
      <div className="topbar-logo">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-10" />
      </div>
      {/* Search bar */}
      <div className="topbar-search">
        <input
          type="text"
          placeholder="Search..."
          className="mx-4 px-4 py-2 rounded-full border border-primary bg-gray-800 hover:bg-gray-700 text-white placeholder-gray-500 outline-none"
        />
      </div>
    </header>
  );
};

export default TopBar;
