import { NavLink } from 'react-router-dom';
import { RxDashboard } from "react-icons/rx";
import { IoHelpCircleOutline } from "react-icons/io5";
import { TfiBarChart } from "react-icons/tfi";
import { SlSettings } from "react-icons/sl";
import { AiOutlineUser } from "react-icons/ai";
import { PiDevicesFill, PiBuildingsThin, PiCreditCard, PiProjectorScreenChartLight } from "react-icons/pi";
import { LuClipboardList } from "react-icons/lu";
import { BsSim } from "react-icons/bs";
import { useContext } from 'react';
import { DashboardContext } from '../../context/dashboard-context';
import Agent from './Agent'



const Sidebar = () => {
  
  const {isClicked, setIsClicked, isCollapsed, setIsCollapsed} = useContext(DashboardContext);

  const handleNav = (navId) => {
    setIsClicked(navId);
  };

  return isCollapsed ? (
    <aside className="bg-white mt-2 ml-8 md:mx-2 mr-2 px-2 rounded-sm mb-4 min-w-[100px] md:-w-[280px] transition-all duration-500">
      <div className='flex justify-center'>
        <header className="flex mt-4 mx-2 md:mx-3 xl:mx-4 cursor-pointer font-extrabold mb-2" style={{ fontFamily: 'Berlin San FB Demi' }}>
          <h1 className="text-sm md:text-lg xl:text-xl" onClick={() => setIsCollapsed(false)}>Snaarp</h1>
        </header>
      </div>
      <nav className="flex flex-col text-gray-500">
        <div className="pb-5 space-y-1">
          <NavLink to="/" className={`flex items-center rounded-xl p-2  pt-1 ${isClicked === 1 ? "bg-blue-100 text-blue-600 font-semibold " : "text-gray-500 hover:bg-gray-100"}`} onClick={() => handleNav(1)}>
            <RxDashboard className="text-xl" />
            <p className=" text-xs md:text-sm ">Dashboard</p>
          </NavLink>
          <NavLink to="/" className={`flex items-center rounded-xl p-2 pt-1 ${ isClicked === 2 ? "bg-blue-100 text-blue-600 font-semibold" : "text-gray-500 hover:bg-gray-100"}`}onClick={() => handleNav(2)}>
            <PiBuildingsThin className=" text-xl" />
            <p className=" text-xs md:text-sm">Organization & Reg.</p>
          </NavLink>
          <NavLink to="/" className={`flex items-center rounded-xl p-2 pt-1 ${ isClicked === 3 ? "bg-blue-100 text-blue-600 font-semibold" : "text-gray-500 hover:bg-gray-100"}`} onClick={() => handleNav(3)}
          >
            <LuClipboardList className=" text-xl" />
            <p className=" text-xs md:text-sm">Reporting</p>
          </NavLink>
          <NavLink to="/" className={`flex items-center rounded-xl p-2 pt-1 ${ isClicked === 4 ? "bg-blue-100 text-blue-600 font-semibold" : "text-gray-500 hover:bg-gray-100"}`} onClick={() => handleNav(4)}
          >
            <PiCreditCard className=" text-xl" />
            <p className=" text-xs md:text-sm">Billing</p>
          </NavLink>
          <NavLink to="/" className={`flex items-center rounded-xl p-2 pt-1 ${ isClicked === 5 ? "bg-blue-100 text-blue-600 font-semibold" : "text-gray-500 hover:bg-gray-100"}`} onClick={() => handleNav(5)}
          >
            <AiOutlineUser className=" text-xl" />
            <p className=" text-xs md:text-sm">Account</p>
          </NavLink>
          <NavLink to="/other-page" className={`flex items-center rounded-xl p-2 pt-1 ${isClicked === 6 ? "bg-blue-100 text-blue-600 font-semibold" : "text-gray-500 hover:bg-gray-100"}`} onClick={() => handleNav(6)}
          >
            <BsSim  className=" text-xl" />
            <p className=" text-xs md:text-sm">Storage</p>
          </NavLink>
          <NavLink to="/other-page" className={`flex items-center rounded-xl p-2 pt-1 ${ isClicked === 7 ? "bg-blue-100 text-blue-600 font-semibold" : "text-gray-500 hover:bg-gray-100"}`} onClick={() => handleNav(7)}
          >
            <SlSettings className=" text-xl" />
            <p className=" text-xs md:text-sm">Settings</p>
          </NavLink>
          <NavLink to="/device-management" className={`flex items-center rounded-xl p-2 pt-1 ${ isClicked === 8 ? "bg-blue-100 text-blue-600 font-semibold" : "text-gray-500 hover:bg-gray-100"}`} onClick={() => handleNav(8)}
          >
            <PiDevicesFill className=" text-xl" />
            <p className=" text-xs md:text-sm">Device Management</p>
          </NavLink>
          <NavLink to="/device-management" className={`flex items-center rounded-xl p-2 pt-1 ${ isClicked === 9 ? "bg-blue-100 text-blue-600 font-semibold" : "text-gray-500 hover:bg-gray-100"}`} onClick={() => handleNav(9)}
          >
            <PiProjectorScreenChartLight  className=" text-xl" />
            <p className=" text-xs md:text-sm">Productivity Report</p>
          </NavLink>
        </div>
        <div className="mt-5 space-y-1">
          <NavLink to="/other-page" className={`flex items-center rounded-xl p-2 pt-1 ${isClicked === 10 ? "bg-blue-100 text-blue-600 font-semibold" : "text-gray-500 hover:bg-gray-100"}`} onClick={() => handleNav(10)}
          >
            <TfiBarChart className=" text-xl" />
            <p className=" text-xs md:text-sm">User Panel</p>
          </NavLink>
          <NavLink to="/other-page" className={`flex items-center rounded-xl p-2 pt-1 ${isClicked === 11 ? "bg-blue-100 text-blue-600 font-semibold" : "text-gray-500 hover:bg-gray-100"}`} onClick={() => handleNav(11)}
          >
            <IoHelpCircleOutline className=" text-xl" />
            <p className=" text-xs md:text-sm" >Support</p>
          </NavLink>
          <hr className="mx-2 my-2 border-gray-300" />
        </div>
      </nav>
      <Agent/>
    </aside>
  ) : (
    <div
      className="bg-white mt-2 ml-8 md:mx-2 mr-2 px-12 md:px-18 lg:px-15 rounded-sm mb-4 min-w-[100px] md:-w-[280px] transition-all duration-500 h-14"
      onClick={() => setIsCollapsed(true)}
    >
      <div className='flex justify-center'>
        <header className="flex mt-4 mx-2 md:mx-3 xl:mx-4 cursor-pointer font-extrabold mb-2 " style={{ fontFamily: 'Berlin San FB Demi' }}>
          <h1 className="text-sm md:text-lg xl:text-xl" onClick={() => setIsCollapsed(false)}>Snaarp</h1>
        </header>
      </div>
    </div>
  );
};

export default Sidebar;