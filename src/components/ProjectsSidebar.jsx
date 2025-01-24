import React from 'react';

const ProjectsSidebar = () => {
  return (
    <aside className="w-1/3 bg-stone-50 px-8 py-12 rounded-r-3xl text-stone-800 shadow-2xl md:w-72">
      <h2 className="mb-6 text-xl font-bold uppercase tracking-wide text-stone-600 md:text-2xl">
        Your Projects
      </h2>
      <div className="space-y-6">
        <button
          className="w-full px-5 py-3 text-sm font-semibold tracking-wide rounded-lg bg-stone-700 text-stone-50 hover:bg-stone-800 focus:ring-4 focus:ring-stone-300 focus:outline-none transition duration-300 ease-in-out md:text-base"
        >
          + Add Project
        </button>
        <ul className="space-y-4">
          <li className="flex items-center justify-between bg-stone-100 px-4 py-3 rounded-lg shadow-sm hover:shadow-md transition duration-300 ease-in-out">
            <span className="text-sm font-medium text-stone-700">Project Alpha</span>
            <button
              className="text-stone-500 hover:text-stone-700 focus:outline-none transition"
              title="Edit Project"
            >
              ✏️
            </button>
          </li>
          <li className="flex items-center justify-between bg-stone-100 px-4 py-3 rounded-lg shadow-sm hover:shadow-md transition duration-300 ease-in-out">
            <span className="text-sm font-medium text-stone-700">Project Beta</span>
            <button
              className="text-stone-500 hover:text-stone-700 focus:outline-none transition"
              title="Edit Project"
            >
              ✏️
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default ProjectsSidebar;
