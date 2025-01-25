import React from "react";
import Button from "./Button";

const ProjectsSidebar = ({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) => {
  return (
    <aside className="w-1/3 bg-gradient-to-br from-stone-200 to-stone-300 px-8 py-10 rounded-r-3xl text-stone-800 shadow-2xl md:w-72">
      <h2 className="mb-8 text-2xl font-bold uppercase tracking-wide text-stone-700 md:text-2xl">
        Your Projects
      </h2>
      <div className="space-y-8">
        <Button onClick={onStartAddProject}>+ Add Project</Button>
        <ul className="space-y-4">
          {projects.map((project) => {
            let cssClasses =
              "flex items-center justify-between px-4 py-3 rounded-lg shadow-md transition duration-300 ease-in-out";
            if (project.id === selectedProjectId) {
              cssClasses += "bg-stone-800 text-stone-200";
            } else {
              cssClasses +=
                "bg-stone-100 text-stone-600 hover:bg-amber-50 hover:text-amber-700";
            }
            return (
              <li key={project.id} className={cssClasses}>
                <span className="text-sm font-medium text-stone-800 truncate">
                  {project.title}
                </span>
                <button
                  onClick={()=> onSelectProject(project.id)}
                  title="Edit Project"
                >
                  ✏️
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default ProjectsSidebar;
