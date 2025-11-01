// import React, { useEffect, useState } from "react";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
// } from "recharts";

// const ProgressChart = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // Load tasks from localStorage (shared with TaskList)
//     const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
//     const statusCounts = {
//       todo: storedTasks.filter(task => task.status === "todo").length,
//       inprogress: storedTasks.filter(task => task.status === "inprogress").length,
//       done: storedTasks.filter(task => task.status === "done").length,
//     };

//     setData([
//       { name: "To Do", value: statusCounts.todo },
//       { name: "In Progress", value: statusCounts.inprogress },
//       { name: "Done", value: statusCounts.done },
//     ]);
//   }, []);

//   const COLORS = ["#FFB6C1", "#A18CD1", "#8EC5FC"];

//   return (
//     <div className="h-screen w-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#A18CD1] via-[#FBC2EB] to-[#8EC5FC] text-gray-900 font-sans transition-all duration-700">
//       <div className="bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-xl w-[90%] max-w-5xl text-center">
//         <h1 className="text-4xl font-extrabold mb-10 drop-shadow-lg tracking-wide">
//           Task Progress Overview
//         </h1>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center">
//           {/* Pie Chart */}
//           <div className="h-80">
//             <ResponsiveContainer>
//               <PieChart>
//                 <Pie
//                   data={data}
//                   cx="50%"
//                   cy="50%"
//                   outerRadius={120}
//                   dataKey="value"
//                   label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
//                 >
//                   {data.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                   ))}
//                 </Pie>
//                 <Tooltip />
//                 <Legend />
//               </PieChart>
//             </ResponsiveContainer>
//           </div>

//           {/* Bar Chart */}
//           <div className="h-80">
//             <ResponsiveContainer>
//               <BarChart data={data} margin={{ top: 10, right: 20, bottom: 10, left: 0 }}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis allowDecimals={false} />
//                 <Tooltip />
//                 <Bar dataKey="value" fill="#A18CD1" radius={[10, 10, 0, 0]} />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProgressChart;

import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function ProgressChart() {
  const [stats, setStats] = useState({
    todo: 0,
    inProgress: 0,
    done: 0,
  });

  useEffect(() => {
    const saved = localStorage.getItem("taskStats");
    if (saved) {
      const parsed = JSON.parse(saved);
      setStats({
        todo: parsed.todo || 0,
        inProgress: parsed.inProgress || 0,
        done: parsed.done || 0,
      });
    }
  }, []);

  const data = [
    { name: "To Do", count: stats.todo },
    { name: "In Progress", count: stats.inProgress },
    { name: "Done", count: stats.done },
  ];

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#A18CD1] via-[#FBC2EB] to-[#8EC5FC] p-6">
      <h1 className="text-4xl font-extrabold mb-10 text-gray-900 drop-shadow-lg">
        Task Progress Overview
      </h1>

      <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-lg p-8 w-[90%] max-w-3xl">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#A18CD1" barSize={70} radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
