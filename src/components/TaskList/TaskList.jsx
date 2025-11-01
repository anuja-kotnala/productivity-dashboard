import React, { useState, useEffect } from "react";

export default function TaskList() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    const task = { id: Date.now(), name: newTask, status: "todo" };
    const updated = [...tasks, task];
    setTasks(updated);
    setNewTask("");
    localStorage.setItem("tasks", JSON.stringify(updated));
  };

  const updateStatus = (id, status) => {
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, status } : task
    );
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
  };

  const deleteTask = (id) => {
    const updated = tasks.filter((task) => task.id !== id);
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
  };

  const resetTasks = () => {
    if (window.confirm("Are you sure you want to reset all tasks?")) {
      setTasks([]);
      localStorage.removeItem("tasks");
      localStorage.removeItem("taskStats");
    }
  };

  // ✅ Store consistent stats for progress chart
  useEffect(() => {
    const stats = {
      todo: tasks.filter((t) => t.status === "todo").length,
      inProgress: tasks.filter((t) => t.status === "in-progress").length,
      done: tasks.filter((t) => t.status === "done").length,
    };
    localStorage.setItem("taskStats", JSON.stringify(stats));
  }, [tasks]);

  const sections = [
    { key: "todo", title: "To Do", color: "border-gray-400" },
    { key: "in-progress", title: "In Progress", color: "border-yellow-400" },
    { key: "done", title: "Done", color: "border-green-400" },
  ];

  return (
    // <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-purple-100 to-blue-100 p-6 pt-24">
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-gradient-to-br from-[#A18CD1] via-[#FBC2EB] to-[#8EC5FC] text-gray-900 font-sans transition-all duration-700 p-6 ">
      <h1 className="text-3xl font-extrabold mb-6">Task Manager</h1>

      <div className="flex gap-3 mb-6">
        <input
          type="text"
          placeholder="Enter a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border rounded-lg px-3 py-2 w-64 outline-none focus:ring-2 focus:ring-purple-400"
        />
        <button
          onClick={addTask}
          className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition"
        >
          Add
        </button>
        <button
          onClick={resetTasks}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Reset All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {sections.map((section) => (
          <div
            key={section.key}
            className={`bg-white border-2 ${section.color} rounded-2xl shadow-md p-4 flex flex-col`}
          >
            <h2 className="text-xl font-semibold mb-3 text-center">
              {section.title}
            </h2>

            {tasks.filter((t) => t.status === section.key).length === 0 ? (
              <p className="text-gray-400 text-center">No tasks here</p>
            ) : (
              <ul className="space-y-3">
                {tasks
                  .filter((t) => t.status === section.key)
                  .map((task) => (
                    <li
                      key={task.id}
                      className="flex justify-between items-center p-3 border rounded-lg"
                    >
                      <p
                        className={`font-medium ${
                          task.status === "done"
                            ? "line-through text-gray-400"
                            : ""
                        }`}
                      >
                        {task.name}
                      </p>

                      <div className="flex gap-2">
                        {task.status !== "in-progress" && (
                          <button
                            onClick={() =>
                              updateStatus(task.id, "in-progress")
                            }
                            className="text-yellow-600 hover:underline"
                          >
                            In Progress
                          </button>
                        )}
                        {task.status !== "done" && (
                          <button
                            onClick={() => updateStatus(task.id, "done")}
                            className="text-green-600 hover:underline"
                          >
                            Done
                          </button>
                        )}
                        {task.status !== "todo" && (
                          <button
                            onClick={() => updateStatus(task.id, "todo")}
                            className="text-blue-600 hover:underline"
                          >
                            To Do
                          </button>
                        )}
                        <button
                          onClick={() => deleteTask(task.id)}
                          className="text-red-500 hover:underline"
                        >
                          ❌
                        </button>
                      </div>
                    </li>
                  ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
