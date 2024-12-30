import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "10 am", sales: 2400 },
  { name: "11 am", sales: 1398 },
  { name: "12 am", sales: 9800 },
  { name: "01 am", sales: 3908 },
  { name: "02 am", sales: 4800 },
  { name: "03 am", sales: 3800 },
  { name: "04 am", sales: 4300 },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: { value: number }[];
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="flex flex-col justify-center items-center bg-black text-white p-5 rounded-md">
        <p className="font-normal text-[12px] opacity-80 mb-2">Sales</p>
        <p className="font-semibold text-[16px]">{payload[0].value}</p>
      </div>
    );
  }

  return null;
};

const SimpleLineCharts = () => {
  return (
    <div className="w-full bg-white rounded-xl h-full p-4 shadow-md shadow-gray-200">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold text-[#030229] text-opacity-70">
          Reports
        </h1>
      </div>
      <div className="relative w-full h-full py-10">
        <ResponsiveContainer>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <defs>
              <linearGradient
                id="lineGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#5BC4FF" stopOpacity={1} />
                <stop offset="100%" stopColor="#FF5BEF" stopOpacity={1} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="url(#lineGradient)"
              activeDot={{ r: 8 }}
              strokeWidth={6}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SimpleLineCharts;
