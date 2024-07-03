"use client"

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
  // const [newTitle, setNewTitle] = useState("Untitled Note");
  // const [newDescription, setNewDescription] = useState("");

  // const onAddNote = () => {
  //   const newNote = {
  //     id: uuid(), // Creates a random unique id.
  //     title: newTitle,
  //     description: newDescription,
  //     lastModified: Date.now(),
  //   };

  //   setNotes([...notes, newNote]); // Adds the new note to the notes array (By spreading the elements inside notes).
  //   setNewTitle("");
  //   setNewDescription("");
  // };

  const onDeleteNote  = (idToDelete: string) => {
    // Filters out the note with the provided id.
    // (only if the logic passes true will the item be able to stay but if false the item will be removed)
    const deleteNotes = notes.filter((note) => note.id !== idToDelete);
    setNotes(deleteNotes); // Updates the notes array.
  }

  return (
    <main className="flex flex-col items-center m-20">
      <div className="font-mono">Note Taking App</div>
      <Note notes={notes} setNotes={setNotes} />
      <div className="divider divider-secondary mb-7">Notes</div>
      <div className="mt-5">
        <NoteList notes={notes} onDeleteNote={onDeleteNote} />
      </div>
    </main>
  );
}
