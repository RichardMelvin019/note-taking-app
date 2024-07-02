"use client";

import { HiStar, HiTrash, HiPencilSquare } from "react-icons/hi2";

const NoteList = () => {
  return (
    <div className="flex flex-row justify-normal">
      <div className="items-center border-double border-4 border-primary p-6 rounded-lg">
        <HiStar />
        <div className="flex flex-row m-3 space-x-44">
          <strong>TITLE</strong>
          <HiTrash />
        </div>
        <div className="flex flex-row m-1 space-x-28">
          <p>Note Description</p>
          <HiPencilSquare />
        </div>
        <small>Last modified [date]</small>
      </div>
    </div>
  );
};

export default NoteList;
