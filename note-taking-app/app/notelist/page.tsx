"use client";

import { HiStar, HiTrash, HiPencilSquare } from "react-icons/hi2";

const NoteList = ({ notes }) => {
  return (
    <div className="grid grid-cols-3 gap-4 justify-normal">
      {notes.map((note) => (
        <div className="items-center border-double border-4 border-primary p-6 rounded-lg">
          <HiStar />
          <div className="flex flex-row m-3 space-x-44">
            <strong>TITLE</strong>
            <button className="btn btn-ghost">
              <HiTrash className="text-red-600" />
            </button>
          </div>
          <div className="flex flex-row m-1 space-x-28">
            <p>Note Description</p>
            <button className="btn btn-ghost">
              <HiPencilSquare className="text-blue-600" />
            </button>
          </div>
          <small>Last modified [date]</small>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
