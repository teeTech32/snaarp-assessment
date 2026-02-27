import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { fileSharingData } from "../../data/mockData";
import { PiFilesLight } from "react-icons/pi";
import { PiChartBar } from "react-icons/pi";
import { GoGraph } from "react-icons/go";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useContext } from "react";
import { DashboardContext } from "../../context/dashboard-context";


function FileSharingWidget() {
const {isClicked, setIsClicked} = useContext(DashboardContext);

  const handleClick = (navId) => {
    setIsClicked(navId);
  };
  

  return (
    <div className="relative bg-white p-2 rounded-xl shadow-sm border border-gray-100 mt-0">
      {/* Header */}
      <div className="mb-4">
        <div>
          <div className="inline-flex">
            <button type="button" className={`${isClicked === 12 ? "bg-blue-100 text-blue-600" :"bg-gray-200 text-black"} p-2 rounded-lg cursor-pointer`} onClick={()=>handleClick(12)}>
              <PiFilesLight className=" text-sm  "/>
            </button>
            <h3 className="font-bold text-gray-700 text-xs md:text-sm pl-2 pt-1 ">
              File Sharing
            </h3>
          </div>
        </div>
        <p className="text-xs text-gray-400">
          Keep track of files and how they're shared
        </p>
         <div className="absolute inline-flex right-2 top-2">
            <button type="button" className={`${isClicked === 13 ? "bg-blue-100 text-blue-600" :"bg-gray-200 text-black"} p-2 rounded-lg cursor-pointer`} onClick={()=>handleClick(13)}>
              <PiChartBar className=" text-sm  "/>
            </button>
            <button type="button" className={`${isClicked === 14 ? "bg-blue-100 text-blue-600" :"bg-gray-200 text-black"} mx-2 p-2 rounded-lg cursor-pointer`} onClick={()=>handleClick(14)}>
              <GoGraph className=" text-sm  "/>
            </button>
            <button type="button" className={`cursor-pointer relative ${isClicked === 15 ? "bg-blue-100 text-blue-600" : "bg-white text-black"} border-2 border-gray-200 w-18 rounded-xl p-2`} onClick={()=>handleClick(15)}>
              <span className="text-xs float-start">Month</span>
              <RiArrowDropDownLine className="absolute right-2 top-2"/>
            </button>
         </div>
      </div>
      {/* Chart */}
      <div className="h-54" aria-label="Monthly file sharing statistics for June 2026">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={fileSharingData}>
            <CartesianGrid strokeDasharray="6 6" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12 }}/>
            <YAxis domain={[0, 100]} ticks={[0, 10, 20, 30, 40, 50, 60, 70,80, 90, 100]} axisLine={false} tickLine={false} tick={{ fontSize:12 }} />
            <Tooltip />
            <Bar dataKey="value" fill="#7c3aed" radius={[6, 6, 0, 0]} barSize={35}/>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default FileSharingWidget;