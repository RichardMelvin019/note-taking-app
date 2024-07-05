"use client";

import { useState } from "react";
// import uuid from "react-uuid";
import Note from "./note/page";
import NoteList from "./notelist/page";

interface Notes {
  id: string;
  title: string;
  description: string;
  lastModified: number;
}

export default function Home() {
  const [notes, setNotes] = useState<Notes[]>([]);
  const [activeNote, setActiveNote] = useState(false);

  const onDeleteNote = (idToDelete: string) => {
    // Filters out the note with the provided id.
    // (only if the logic passes true will the item be able to stay but if false the item will be removed)
    const deleteNotes = notes.filter((note) => note.id !== idToDelete);
    setNotes(deleteNotes); // Updates the notes array.
  };

  return (
    <main className="flex flex-col items-center m-20">
      <div className="font-mono">Note Taking App</div>
      <Note notes={notes} setNotes={setNotes} activeNote={activeNote} />
      <div className="divider divider-secondary mb-7">Notes</div>
      <div className="mt-5">
        <NoteList
          notes={notes}
          onDeleteNote={onDeleteNote}
          activeNote={activeNote}
          setActiveNote={setActiveNote}
        />
      </div>
    </main>
  );
}
