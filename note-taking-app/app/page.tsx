"use client"

import { useState } from "react";
import uuid from "react-uuid";
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

  const onAddNote = () => {
    const newNote = {
      id: uuid(), // Creates a random unique id.
      title: "",
      description: "",
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes]); // Adds the new note to the notes array (By spreading the elements inside notes).
  };

  return (
    <main className="flex flex-col items-center m-20">
      <div className="font-mono">Note Taking App</div>
      <Note onAddNote={onAddNote} />
      <div className="divider divider-secondary mb-7">Notes</div>
      <div className="mt-5">
        <NoteList notes={notes} />
      </div>
    </main>
  );
}
