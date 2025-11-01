

// import { Link } from "react-router-dom";

// export default function Home() {
//   const sections = [
//     {
//       title: "Tasks",
//       desc: "Organize, add, and manage your daily tasks efficiently.",
//       path: "/tasks",
//     },
//     {
//       title: "Progress",
//       desc: "Track your productivity and completed sessions.",
//       path: "/progress",
//     },
//     {
//       title: "Pomodoro Timer",
//       desc: "Configure your Pomodoro timer and preferences.",
//       path: "/setup",
//     },
//   ];

//   return (
//     // <div className="flex flex-col justify-center items-center h-full text-center p-10 pt-24">
//     <div className="h-screen w-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#A18CD1] via-[#FBC2EB] to-[#8EC5FC] text-gray-900 font-sans transition-all duration-700 pt-24">
//       <h1 className="text-5xl font-extrabold mb-12 ">
//         Productivity Dashboard
//       </h1>
//       <p className="text-gray-700 mb-10 max-w-lg">
//         Manage your workflow, stay focused, and track your growth — all in one
//         calm workspace.
//       </p>


//       {/* Card Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {sections.map((section) => (
//           <Link
//             to={section.path}
//             key={section.title}
//             className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg p-8 w-64 text-center hover:scale-105 hover:bg-white/90 transition-all"
//           >
//             <h2 className="text-2xl font-bold  mb-2">
//               {section.title}
//             </h2>
//             <p className="text-gray-600 text-sm">{section.desc}</p>
//           </Link>
//         ))}
//       </div>


//             {/* Overview Section */}
//       <div className="mt-16 bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-md w-3/4 text-center ">
//         <h2 className="text-xl font-semibold mb-2 ">Welcome Back!</h2>
//         <p className="text-gray-700">
//           You have <span className="font-semibold ">2 tasks</span> to do,{" "}
//           <span className="font-semibold ">2 in progress</span>, and{" "}
//           <span className="font-semibold ">3 completed</span>.
//           Keep going strong!
//         </p>
//       </div>

//     </div>
//   );
// }


import { Link } from "react-router-dom";

export default function Home() {
  const sections = [
    {
      title: "Tasks",
      desc: "Organize, add, and manage your daily tasks efficiently.",
      path: "/tasks",
    },
    {
      title: "Progress",
      desc: "Track your productivity and completed sessions.",
      path: "/progress",
    },
    {
      title: "Pomodoro Timer",
      desc: "Configure your Pomodoro timer and preferences.",
      path: "/setup",
    },
  ];

  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-start bg-gradient-to-br from-[#A18CD1] via-[#FBC2EB] to-[#8EC5FC] text-gray-900 font-sans transition-all duration-700 pt-20 pb-10">
      
      {/* Heading */}
      <h1 className="text-5xl font-extrabold mb-6">Productivity Dashboard</h1>
      <p className="text-gray-700 mb-12 max-w-lg text-center">
        Manage your workflow, stay focused, and track your growth — all in one
        calm workspace.
      </p>

      {/* Welcome Section */}
      <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-md w-3/4 max-w-3xl text-center py-8 px-6 mb-14">
        <h2 className="text-3xl font-semibold mb-3">Welcome Back!</h2>
        <p className="text-gray-700 text-lg">
          You have <span className="font-semibold">2 tasks</span> to do,{" "}
          <span className="font-semibold">2 in progress</span>, and{" "}
          <span className="font-semibold">3 completed</span>. Keep going strong!
        </p>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {sections.map((section) => (
          <Link
            to={section.path}
            key={section.title}
            className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-8 w-72 text-center hover:scale-105 hover:bg-white transition-all duration-300"
          >
            <h2 className="text-2xl font-bold mb-3">
              {section.title}
            </h2>
            <p className="text-gray-700 text-sm">{section.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

