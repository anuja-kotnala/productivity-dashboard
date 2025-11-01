import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const active =
    "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1 transition";
  const inactive =
    "text-gray-700 hover:text-blue-500 transition";

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/30 backdrop-blur-lg shadow-md py-4 z-50">
      <div className="max-w-5xl mx-auto flex justify-center gap-10 text-lg">
        <Link
          to="/"
          className={location.pathname === "/" ? active : inactive}
        >
          Home
        </Link>
        <Link
          to="/tasks"
          className={location.pathname === "/tasks" ? active : inactive}
        >
          Tasks
        </Link>
        <Link
          to="/progress"
          className={location.pathname === "/progress" ? active : inactive}
        >
          Progress
        </Link>
        <Link
          to="/setup"
          className={location.pathname === "/setup" ? active : inactive}
        >
          Pomodoro Timer         
        </Link>
      </div>
    </nav>
  );
};

//pomodoro timer->setup page actually

export default Navbar;
