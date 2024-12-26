import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "", value: 200 },
  { name: "Sale", value: 200 },
  { name: "Distribute", value: 300 },
  { name: "Return", value: 300 },
];
const COLORS = ["#FFFFFF", "#605BFF", "#FFC327", "#FF8F6B"];

const SimplePieCharts = () => {
  return (
    <div className="w-full bg-white rounded-xl h-full p-4 shadow-md shadow-gray-200">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold text-[#030229] text-opacity-70">
          Analytics
        </h1>
      </div>
      <div className="relative w-full h-full py-5 flex justify-center items-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              cornerRadius={50}
              innerRadius={90}
              outerRadius={120}
              fill="#8884d8"
              paddingAngle={-8}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${entry}-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend
              align="center"
              verticalAlign="bottom"
              iconType="circle"
              iconSize={12}
              wrapperStyle={{ paddingBottom: "20px" }}
            />
          </PieChart>
        </ResponsiveContainer>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-3/4 font-bold text-gray-800 flex flex-col justify-center items-center">
          <span className="font-extrabold text-gray-700 text-[30px]">80%</span>
          <span className=" text-gray-400 text-[11px]">TRANSACTIONS</span>
        </div>
      </div>
    </div>
  );
};

export default SimplePieCharts;
