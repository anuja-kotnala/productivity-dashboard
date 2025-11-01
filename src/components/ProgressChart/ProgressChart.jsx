

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
