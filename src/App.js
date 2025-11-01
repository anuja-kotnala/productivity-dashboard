// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Layout/Navbar";
// import Footer from "./components/Layout/Footer";
// import SetupPage from "./components/PomodoroTimer/SetupPage";
// import TimerPage from "./components/PomodoroTimer/TimerPage";
// import TaskList from "./components/TaskList/TaskList";
// import ProgressChart from "./components/ProgressChart/ProgressChart";
// import Home from "./pages/Home";

// function App() {
//   const [sessionLength, setSessionLength] = useState(25);
//   const [breakLength, setBreakLength] = useState(5);

//   return (
//     <Router>
//       <div className="min-h-screen bg-gradient-to-br from-purple-200 via-purple-100 to-blue-200 flex flex-col">
//         <Navbar />

//         <div className="flex-1">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route
//               path="/setup"
//               element={
//                 <SetupPage
//                   sessionLength={sessionLength}
//                   breakLength={breakLength}
//                   setSessionLength={setSessionLength}
//                   setBreakLength={setBreakLength}
//                 />
//               }
//             />
//             <Route
//               path="/timer"
//               element={
//                 <TimerPage
//                   sessionLength={sessionLength}
//                   breakLength={breakLength}
//                 />
//               }
//             />
//             <Route path="/tasks" element={<TaskList />} />
//             <Route path="/progress" element={<ProgressChart />} />
//           </Routes>
//         </div>

//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SetupPage from "./components/PomodoroTimer/SetupPage";
import TimerPage from "./components/PomodoroTimer/TimerPage";
import TaskList from "./components/TaskList/TaskList";
import ProgressChart from "./components/ProgressChart/ProgressChart";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Home from "./pages/Home";

// a simple layout that shows navbar + footer
function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-100 to-blue-100">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

export default function App() {
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);

  return (
    <Router>
      <Routes>
        {/* ✅ Home has no navbar/footer */}
        <Route path="/" element={<Home />} />

        {/* ✅ All other pages wrapped inside layout */}
        <Route
          path="/setup"
          element={
            <Layout>
              <SetupPage
                sessionLength={sessionLength}
                breakLength={breakLength}
                setSessionLength={setSessionLength}
                setBreakLength={setBreakLength}
              />
            </Layout>
          }
        />
        <Route
          path="/timer"
          element={
            <Layout>
              <TimerPage
                sessionLength={sessionLength}
                breakLength={breakLength}
              />
            </Layout>
          }
        />
        <Route
          path="/tasks"
          element={
            <Layout>
              <TaskList />
            </Layout>
          }
        />
        <Route
          path="/progress"
          element={
            <Layout>
              <ProgressChart />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}
