import React from "react";

const DashBox = ({ title, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-8 w-64 text-center hover:scale-105 hover:bg-white transition"
    >
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
    </div>
  );
};

export default DashBox;
