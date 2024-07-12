"use client";

// import { useState } from "react";
// import uuid from "react-uuid";

const Note = ({
  activeNote,
  onAddNote,
  newTitle,
  setNewTitle,
  setNewDescription,
  newDescription,
  newImportant,
  setNewImportant
}) => {
  // const [newTitle, setNewTitle] = useState("");
  // const [newDescription, setNewDescription] = useState("");

  // const onAddNote = () => {
  //   const newNote = {
  //     id: uuid(), // Creates a random unique id.
  //     title: newTitle || "Untitled Note", // if user did not provide a title set the title to "Untitled Note"
  //     description: newDescription,
  //     lastModified: Date.now(),
  //   };

  //   setNotes([...notes, newNote]); // Adds the new note to the notes array (By spreading the elements inside notes).
  //   setNewTitle("");
  //   setNewDescription("");
  // };

  return (
    <div>
      <div className="flex flex-row m-3 space-x-4 justify-center">
        <input
          type="text"
          id="title"
          placeholder="Title"
          autoFocus
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="input input-bordered input-primary w-96"
        />
        <textarea
          id="description"
          placeholder="Note Description"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          className="textarea textarea-primary textarea-bordered textarea-xs w-96 text-balance"
        />
      </div>
      <div className="form-control">
        <label className="cursor-pointer space-x-4">
          <input
            type="checkbox"
            id="important"
            checked={newImportant}
            onChange={(e) => setNewImportant(e.target.checked)}
            className="checkbox checkbox-secondary"
          />
          <span className="label-text">Mark as Important</span>
        </label>
      </div>
      <div className="flex flex-row justify-center">
        {!activeNote ? (
          <button
            type="submit"
            id="submit"
            className="btn btn-outline btn-secondary m-2"
            onClick={onAddNote}
          >
            Add Note
          </button>
        ) : (
          <button
            type="submit"
            id="submit"
            className="btn btn-success m-2"
            // onClick={}
          >
            Update
          </button>
        )}
      </div>
    </div>
  );
};

export default Note;
