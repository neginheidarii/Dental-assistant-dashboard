import Navbar from "./Navbar";
import TopBar from "./TopBar";
import Footer from "./footer";

const Layout = () => {
  return (
    <div className="grid grid-cols-[18rem,1fr] grid-rows-[auto,1fr,auto] min-h-screen">
      {/* Sidebar (Navbar) */}
      <div className="row-span-3 ">
        <Navbar />
      </div>

      {/* Header */}
      <div className="col-start-2 row-start-1">
        <TopBar />
      </div>

      {/* Main Content */}
      <main className="col-start-2 row-start-2 p-6 bg-gray-100">
        <h1 className="text-2xl font-bold">Welcome to AloAI!</h1>
        <p className="mt-4 text-gray-700">
          This is the main content area. Add your components and features here.
        </p>
      </main>

      {/* Footer */}
      <footer className="col-start-2 row-start-3 bg-light text-dark py-6">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
