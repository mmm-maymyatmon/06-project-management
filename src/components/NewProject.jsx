import Button from "./Button";
import Input from "./Input";
import React, { useRef } from "react";
import Modal from "./Modal";

const NewProject = ({ onAdd, onCancel }) => {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
        modal.current.open(); // Open the error modal
        return; // Stop here if validation fails
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">Oops ... looks like you forgot to enter a value.</p>
        <p className="text-stone-600 mb-4">Please make sure you provide a valid value for very input field.</p>
      </Modal>
      <div className="w-[35rem]">
        <h2 className="text-2xl font-bold text-stone-800 mb-6">
          Add New Project
        </h2>
        <div className="space-y-6">
          <Input type="text" ref={title} label="Project Title" />
          <Input ref={description} label="Description" textarea />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
        <menu className="flex items-center justify-end gap-4 mt-8">
          <li>
            <Button onClick={onCancel} className="px-4 py-3 text-stone-800 border border-stone-800 rounded-md hover:bg-stone-100">
              Cancel
            </Button>
          </li>
          <li>
            <Button onClick={handleSave}>Save</Button>
          </li>
        </menu>
      </div>
    </>
  );
};

export default NewProject;
