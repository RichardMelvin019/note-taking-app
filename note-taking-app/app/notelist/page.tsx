"use client";

import { HiStar, HiTrash, HiPencilSquare } from "react-icons/hi2";

const NoteList = ({ notes, onDeleteNote, activeNote, setActiveNote, onMarkImportant }) => {
  return (
    <div className="grid grid-cols-3 gap-4 justify-normal">
      {notes.map((note) => (
        <div
          key={note.id}
          className={`items-center border-double border-4 border-primary p-6 rounded-lg whitespace-pre-line break-words ${
            note.id === activeNote && "border-warning"
          }`}
        >
          <HiStar onClick={() => onMarkImportant(note.id)}
          className={`${note.important ? "text-yellow-600" : null}`} />
          <div className="flex flex-row">
            <div className="flex flex-col m-3 ">
              <strong className="text-balance ">{note.title}</strong>
              <p className="text-balance font-mono">{note.description}</p>
            </div>
            <div className="flex flex-col m-1 ">
              <button
                className="btn btn-ghost"
                onClick={() => onDeleteNote(note.id)}
              >
                <HiTrash className="text-red-600" />
              </button>
              <button className="btn btn-ghost">
                <HiPencilSquare
                  className="text-blue-600"
                  onClick={() => setActiveNote(note.id)}
                />
              </button>
            </div>
          </div>
          <small>
            {new Date(note.lastModified).toLocaleDateString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })}
          </small>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
