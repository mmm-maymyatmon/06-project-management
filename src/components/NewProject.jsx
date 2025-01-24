import Input from "./Input";
import React, { useRef } from "react";

const NewProject = () => {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        enteredTitle = title.current.value;
        enteredDescription = description.current.value;
        enteredDueDate = dueDate.current.value;

        //validation
        
    }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">Cancel</button>
        </li>
        <li>
          <button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
        </li>
      </menu>
      <div>
        <Input type="text" ref={title} label="Title" />
        <Input ref={description} label="Description" textarea />
        <Input type="date" ref={dueDate} label="Due Date" />
      </div>
    </div>
  );
};

export default NewProject;
