import React from "react";
import TopBar from "./components/TopBar";
import Footer from "./components/footer";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <div id="root" className="flex flex-col min-h-screen pb-12">
      <TopBar />
      <main className="main-content flex-1 p-8 mt-[3rem]">
        {/* Main content goes here */}
        <SideBar />
      </main>
      <Footer />
    </div>
  );
};

export default App;
