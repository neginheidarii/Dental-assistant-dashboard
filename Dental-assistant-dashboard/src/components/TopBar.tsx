function TopBar() {
  return (
    <div className="container mx-auto flex justify-between items-center pb-10 px-8 mt-10 shadow-md box-border">
      {/* Right Section */}
      <div className="fixed right-0 flex items-center space-x-6 pr-6 bg-white ">
        {/* Search Bar */}
        <div className="relative w-64 my-6">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border border-gray-300 rounded bg-light text-dark focus:outline-none focus:ring-2 focus:ring-accent1 focus:border-transparent"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-accent1 hover:text-blue-500 transition duration-300">
            🔍
          </button>
        </div>

        {/* Notifications */}
        <button className="bg-[#0c2555] text-light px-4 py-2 rounded hover:bg-sky-500 transition duration-300">
          Notifications
        </button>

        {/* Profile */}
        <div className="relative">
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="w-10 h-10 rounded-full border border-accent1 shadow"
          />
          {/* Status Indicator */}
          <span className="absolute bottom-0 right-0 block w-3 h-3 bg-accent2 rounded-full border-2 border-light"></span>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
