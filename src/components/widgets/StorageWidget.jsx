import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { SiGooglecloudstorage } from "react-icons/si";
import { TbAlertHexagonFilled } from "react-icons/tb";
import { IoFlashOutline } from "react-icons/io5";

import { storageData } from "../../data/mockData";

function StorageWidget() {
  const usedPercentage = Math.round(
    (storageData.used / storageData.total) * 100
  );

  return (
    <div className="relative bg-white px-2 pt-2 pb-13 md:pb-0 rounded-xl shadow-sm border border-gray-100 ">
      <button type="button" className="inline-flex cursor-pointer ">
        <div className="bg-gray-200 p-2 rounded-lg">
          <SiGooglecloudstorage className=" text-sm "/>
        </div>
        <h3 className="font-semibold text-xs md:text-sm text-gray-600 mx-2 mt-1 ">
          Storage
        </h3>
      </button>
       {/* Alert Box */}
      {usedPercentage > 75 && (
        <div className="md:float-right flex flex-row bg-white border-x-4 border-yellow-500 text-black py-3 px-2 rounded-lg text-sm drop-shadow-xl min-w-[200px] md:w-[400px]">
          <div className="">
            <TbAlertHexagonFilled  className="text-2xl text-yellow-500"/>
          </div>
          <div className="px-2 flex flex-col">
            <p className="text-purple-800 font-bold">Note</p>
            <p className="text-xs">
              You've almost reached your limit.
            </p>
            <p className="text-xs">
              You have used 80% of your available storage. Upgrade plan to access more space.
            </p>
          </div>
        </div>
      )}
      <div className="grid grid-cols-12 gap-3 md:gap-y-2 md:gap-x-11 items-center">
        {/* Donut Section */}
        <div className="col-span-12 md:col-span-6 h-64 relative">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={storageData.breakdown}
                dataKey="value"
                innerRadius={80}
                outerRadius={100}
              >
                {storageData.breakdown.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          {/* Center Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center">
              <div className="border-6 border-dashed  border-blue-600 h-35 w-35 rounded-full">
                <div className=" mt-9">
                  <p className="text-2xl font-bold">{usedPercentage}%</p>
                  <p className="text-sm text-gray-500">Used</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Legend Section */}
        <div className="col-span-12 md:col-span-6 grid grid-cols-2 xl:grid-cols-3 md:gap-x-28 gap-x-14   gap-y-3">
          {storageData.breakdown.map((item) => (
            <div
              key={item.name}
              className="flex justify-between items-center text-sm"
            >
              <div className="grid grid-cols-12 gap-4">
                <span
                  className="w-3 h-3 rounded-xs mt-1"
                  style={{ backgroundColor: item.color }}
                ></span>
                <span className="text-black text-xs whitespace-nowrap shrink-0">{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="float-right mr-0 md:absolute md:bottom-2 md:right-3">
        <div className="relative inline-flex px-3 hover:cursor-pointer ">
          <IoFlashOutline className="text-2xl focus:outline-none focus:ring-3 text-blue-600 focus:ring-purple-600 text-blue absolute left-6 top-1" />
          <button type="button" className=" text-xs border-2 border-blue-600  rounded-lg py-2 w-34 focus:outline-none focus:ring-3 focus:ring-purple-600 ">
            <span className="float-end px-4 hover:cursor-pointer text-blue-600">
              Upgrade Plan
            </span>
          </button>
        </div>
      </div> 
   </div>
  );
}

export default StorageWidget;