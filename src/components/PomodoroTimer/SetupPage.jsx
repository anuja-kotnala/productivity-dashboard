

import React from "react";
import { useNavigate } from "react-router-dom";

const SetupPage = ({ sessionLength, breakLength, setSessionLength, setBreakLength }) => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#A18CD1] via-[#FBC2EB] to-[#8EC5FC] text-gray-900 font-sans transition-all duration-700">

      <h1 className="text-5xl font-extrabold mb-12 tracking-wide drop-shadow-lg">
        Pomodoro Timer
      </h1>

      <div className="flex gap-16 text-center">

        {/* Session Length */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Session Length</h2>
          <div className="flex items-center gap-4">
            <button
              className="px-4 py-2 bg-white text-gray-800 font-bold rounded-xl shadow-md hover:shadow-lg transition"
              onClick={() => setSessionLength(prev => Math.max(prev - 1, 1))}
            >
              −
            </button>
            <span className="text-4xl font-bold w-16 text-center inline-block">{sessionLength}</span>
            <button
              className="px-4 py-2 bg-white text-gray-800 font-bold rounded-xl shadow-md hover:shadow-lg transition"
              onClick={() => setSessionLength(prev => prev + 1)}
            >
              +
            </button>
          </div>
        </div>

        {/* Break Length */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Break Length</h2>
          <div className="flex items-center gap-4">
            <button
              className="px-4 py-2 bg-white text-gray-800 font-bold rounded-xl shadow-md hover:shadow-lg transition"
              onClick={() => setBreakLength(prev => Math.max(prev - 1, 1))}
            >
              −
            </button>
            <span className="text-4xl font-bold w-16 text-center inline-block">{breakLength}</span>
            <button
              className="px-4 py-2 bg-white text-gray-800 font-bold rounded-xl shadow-md hover:shadow-lg transition"
              onClick={() => setBreakLength(prev => prev + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => navigate("/timer")}
        className="mt-12 px-10 py-4 bg-white text-gray-800 font-extrabold text-lg rounded-2xl shadow-lg hover:bg-gray-200 hover:shadow-xl transition"
      >
        Start
      </button>
    </div>
  );
};

export default SetupPage;
