import { IoIosSearch } from "react-icons/io";
import { PiCopyLight } from "react-icons/pi";
import { GoBell } from "react-icons/go";
import { TbWorld } from "react-icons/tb";
import { RiArrowDropDownLine } from "react-icons/ri";



function Header() {
  return (
    <>
      <header className="bg-white shadow-lg px-3 py-2 justify-between flex-col md:flex-row  rounded-xl my-2 mr-8 md:mr-2  ">
        <div className="inline-flex relative">
          <input
          type="text"
          placeholder="Search users or groups "
          className=" text-sm md:text-lg border rounded-lg px-4 py-2 w-64 md:w-96 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <IoIosSearch className="absolute text-xl my-3 mx-3 right-1"/>
        </div>
        <div className="inline-flex mt-2 md:mt-0 md:my-0 md:float-end">
          <button type="button" className="cursor-pointer text-xs md:text-sm bg-gray-200 m-1 rounded-sm">
            <GoBell className="m-3 fs-4 text-center "/>
          </button>
          <div className=" bg-gray-200 m-1 pl-2 rounded-sm ml-3 text-center cursor-pointer inline-flex ">
            <p className="text-xs md:text-sm mt-3  ">Agent Code: <span className="text-blue-600">0385623htkjhe</span> </p>
            <PiCopyLight className="m-3 fs-4 cursor-pointer " />
          </div>
        </div>
      </header>
      <header className="relative bg-white shadow-lg px-0 py-1 justify-between flex-col md:flex-row  rounded-xl mr-8 md:mr-2  ">
        <div className="m-1 rounded-sm ml-3 text-center cursor-pointer inline-flex ">
         <div className="text-xs md:text-sm bg-gray-200 m-1 rounded-sm">
            <TbWorld  className="m-3  fs-4 text-center "/>
          </div>
          <p className="mt-3 font-semibold text-xs md:text-sm">Cloud Nextwork</p>
        </div>
        <RiArrowDropDownLine className="absolute text-3xl my-3 mx-3 right-0 top-2 cursor-pointer"/>
      </header>
    </>
    
  );
}

export default Header;