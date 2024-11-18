// Icon imports for visual indicators in the menu
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { FaMoneyBills } from "react-icons/fa6";
import { PiPhoneCallBold } from "react-icons/pi";
import { IoLogOut, IoChatboxEllipsesOutline } from "react-icons/io5";

import logo from "../assets/logo-light.png";

const Navbar = () => {
  return (
    <div className="fixed inset-0 flex justify-start items-start  text-light">
      <ul className="menu bg-[#0c2555] w-72 h-screen shadow-lg gap-y-10">
        <div className="flex flex-col items-center">
          <img src={logo} alt="Logo" className="w-10 my-8" />
        </div>
        {/* Menu items */}
        <li className="flex items-center py-4 px-6 hover:bg-[#e7f5fe] hover:text-[#0f2d69] transition duration-300">
          <RiDashboardHorizontalFill />
          <a className="text-base font-medium ml-4">Dashboard</a>
        </li>
        <li className="flex items-center py-4 px-6 hover:bg-[#e7f5fe] hover:text-[#0f2d69] transition duration-300">
          <MdOutlineBusinessCenter />
          <a className="text-base font-medium ml-4">Business Info</a>
        </li>
        <li className="flex items-center py-4 px-6 hover:bg-[#e7f5fe] hover:text-[#0f2d69] transition duration-300 ">
          <PiPhoneCallBold />
          <a className="text-base font-medium ml-4">Call Resources</a>
        </li>
        <li className="flex items-center py-4 px-6 hover:bg-[#e7f5fe] hover:text-[#0f2d69] transition duration-300">
          <IoChatboxEllipsesOutline />
          <a className="text-base font-medium ml-4">Chat</a>
        </li>
        <li className="flex items-center py-4 px-6 hover:bg-[#e7f5fe] hover:text-[#0f2d69] transition duration-300">
          <FaMoneyBills />
          <a className="text-base font-medium ml-4">Payment</a>
        </li>

        {/* <li className="flex items-center py-4 px-6 hover:bg-[#e7f5fe] hover:text-[#0f2d69] transition duration-300">
          <MdAccountCircle />
          <a className="text-base font-medium ml-4">Profile</a>
        </li> */}
        <a className="btn flex items-center justify-center bg-transparent border border-white text-white px-4 py-3  ml-9 w-40 absolute bottom-5 left-5 rounded-lg hover:bg-[#e7f5fe] hover:text-[#0f2d69] transition duration-300">
          <IoLogOut />
          <p className="ml-1.5">Logout</p>
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
