import React, { useState } from "react";
import Button from "./Button";

const NewTask = ({onAdd, onDelete}) => {
  const [enteredTask, setEnteredTask] = useState('');

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if(enteredTask.trim()=== '') {
        return;
    }
    onAdd(enteredTask);
    setEnteredTask('');
  }
  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="p-2 border rounded-md 
  bg-stone-100 text-stone-700 
  placeholder-stone-400 shadow-sm 
  focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-stone-500
  transition-all duration-200 ease-in-out
"
        onChange={handleChange}
        value={enteredTask}
      />
      <Button onClick={handleClick}>Add task</Button>
    </div>
  );
};

export default NewTask;
