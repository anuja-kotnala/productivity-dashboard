import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TimerPage = ({ sessionLength, breakLength }) => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(sessionLength * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    setTimeLeft(sessionLength * 60);
  }, [sessionLength]);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 0) {
            if (!isBreak) {
              setIsBreak(true);
              return breakLength * 60;
            } else {
              setIsBreak(false);
              return sessionLength * 60;
            }
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, isBreak, sessionLength, breakLength]);

  const formatTime = seconds => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const handleReset = () => {
    setIsRunning(false);
    setIsBreak(false);
    setTimeLeft(sessionLength * 60);
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#A18CD1] via-[#FBC2EB] to-[#8EC5FC] text-gray-900 font-sans transition-all duration-700">

      <div className="text-center">
        <h1 className="text-5xl font-extrabold mb-12 tracking-wide drop-shadow-sm">
          {isBreak ? "Break Time ☕" : "Focus Session"}
        </h1>

        <div className="text-[10rem] font-extrabold mb-12 tracking-widest leading-none">
          {formatTime(timeLeft)}
        </div>

        <div className="flex gap-6 justify-center">
          <button
            onClick={() => setIsRunning(prev => !prev)}
            className="px-8 py-3 rounded-full bg-white text-gray-800 font-medium shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-200"
          >
            {isRunning ? "Pause" : "Start"}
          </button>

          <button
            onClick={handleReset}
            className="px-8 py-3 rounded-full bg-white text-gray-800 font-medium shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-200"
          >
            Reset
          </button>

          <button
            onClick={() => navigate("/setup")}
            className="px-8 py-3 rounded-full bg-white/90 text-gray-800 font-medium shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-200"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimerPage;
