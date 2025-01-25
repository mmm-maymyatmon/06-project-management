import React from "react";
import Button from "./Button";

const ProjectsSidebar = ({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) => {
  return (
    <aside className="w-1/4 bg-gradient-to-tl from-stone-300 to-stone-200 p-8 rounded-3xl shadow-2xl">
      <h2 className="mb-6 text-3xl font-bold text-stone-800 tracking-tight">
        Projects
      </h2>
      <Button
        onClick={onStartAddProject}
        className="w-full py-3 text-stone-50 bg-stone-600 hover:bg-stone-500 focus:ring-4 focus:ring-stone-400 rounded-lg shadow-md transition"
      >
        + Add Project
      </Button>
      <ul className="mt-8 space-y-4">
        {projects.map((project) => {
          const isSelected = project.id === selectedProjectId;
          const baseClasses =
            "flex justify-between items-center px-4 py-3 rounded-lg transition-all shadow-sm";
          const selectedClasses = isSelected
            ? "bg-stone-700 text-stone-100"
            : "bg-stone-100 text-stone-800 hover:bg-stone-50 hover:shadow-md";

          return (
            <li
              key={project.id}
              className={`${baseClasses} ${selectedClasses}`}
            >
              <span className="text-lg font-medium truncate">
                {project.title}
              </span>
              <button
                onClick={() => onSelectProject(project.id)}
                title="Select Project"
                className="text-stone-500 hover:text-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-300 rounded-md transition"
              >
                ✏️
              </button>
            </li>
          );
        })}
      </ul>
      {projects.length === 0 && (
        <p className="mt-6 text-center text-stone-500">
          No projects yet. Start by adding a new project.
        </p>
      )}
    </aside>
  );
};

export default ProjectsSidebar;
