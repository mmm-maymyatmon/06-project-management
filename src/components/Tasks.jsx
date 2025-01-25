import React from "react";
import NewTask from "./NewTask";

const Tasks = ({ tasks, onAdd, onDelete }) => {
  return (
    <section className="max-w-lg mx-auto mt-8 p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="text-gray-600 my-6 text-center">
          This project does not have any tasks yet. Add one to get started!
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="space-y-4 mt-6">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-gray-800 font-medium">{task.text}</span>
              <button
                onClick={() => onDelete(task.id)}
                className="text-sm px-3 py-1 rounded-md bg-red-100 text-red-600 hover:bg-red-200 transition"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Tasks;
