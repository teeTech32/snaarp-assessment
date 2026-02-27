import {AreaChart, Area, ResponsiveContainer } from "recharts";
import { GoArrowUp , GoArrowDown} from "react-icons/go";


function KpiCard({ title, value, trend, color , icon:Icon , data, analysis }) {
  const isPositive = trend > 0;

  // Convert number array into recharts-compatible objects
  const chartData = data.map((val, index) => ({
    index,
    value: val,
  }));

  const strokeColor = color === "green" ? "#16a34a" : "#dc2626";
  const fillColor = color === "green" ? "#dcfce7" : "#fee2e2";

  const trendTextColor = isPositive
    ? "text-green-600"
    : "text-red-600";

  return (
    <div className="bg-white p-2  rounded-xl shadow-sm border border-gray-100 relative ">
      {/* Top Section */}
        <div className="absolute bottom-3 items-start ">
          <div className="flex flex-col">
            <div className="inline-flex mb-8">
              <button type="button" className="cursor-pointer p-1 mr-2 bg-gray-200 text-9xl rounded-lg ">
                {Icon && <Icon size={18} />}
              </button>
              <p className="text-sm text-gray-500">{title}</p>
            </div>
            <div className="inline-flex mb-4">
              <p className="text-xl font-bold text-gray-800">
                {value.toLocaleString()}
              </p>
              <div className={`text-sm font-medium mt-1 pl-2 flex-row flex  ${trendTextColor}`}>
                {trend > 0 ? <GoArrowUp className="mt-0.5 mr-1"/> : <GoArrowDown className="mt-0.5 mr-1"/> }   
                {trend}%
              </div>
            </div>
            <div className="text-xs mb-1 ">
              {analysis}
            </div>
          </div>
        </div>
      {/* Sparkline */}
      <div className="h-20 mt-10 mb-2">
        <ResponsiveContainer width="50%" height="100%" className="float-end pl-2 ">
          <AreaChart data={chartData}>
            <Area
              type="monotone"
              dataKey="value"
              stroke={strokeColor}
              fill={fillColor}
              strokeWidth={2}
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default KpiCard;