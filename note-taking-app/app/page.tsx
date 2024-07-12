"use client";

import { useEffect, useState } from "react";
import uuid from "react-uuid";
import Note from "./note/page";
import NoteList from "./notelist/page";

interface Notes {
  id: string;
  title: string;
  description: string;
  lastModified: number;
  important: boolean;
}

export default function Home() {
  const [notes, setNotes] = useState<Notes[]>(localStorage.notes ? JSON.parse(localStorage.notes) : []);
  const [activeNote, setActiveNote] = useState(null);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newImportant, setNewImportant] = useState(false);

  const onAddNote = () => {
    const newNote = {
      id: uuid(), // Creates a random unique id.
      title: newTitle || "Untitled Note", // if user did not provide a title set the title to "Untitled Note"
      description: newDescription,
      important: newImportant,
      lastModified: Date.now(),
    };

    setNotes([...notes, newNote]); // Adds the new note to the notes array (By spreading the elements inside notes).
    setNewTitle("");
    setNewDescription("");
    setNewImportant(false);
  };

  const onMarkImportant = (id: string) => {
    setNotes(
      notes.map((note) =>
        note.id === id
          ? {
              ...note,
              important: !note.important,
            }
          : note
      )
    );
  };

  const onDeleteNote = (idToDelete: string) => {
    // Filters out the note with the provided id.
    // (only if the logic passes true will the item be able to stay but if false the item will be removed)
    const deleteNotes = notes.filter((note) => note.id !== idToDelete);
    setNotes(deleteNotes); // Updates the notes array.
  };

  const handleUpdateNote = (id: string, updatedTitle: any,
    updatedDescription: any, updatedImportant: any) => {
    const updatedNotes = notes.map((note) =>
        note.id === id ? {
            ...note,
            title: updatedTitle,
            description: updatedDescription,
            important: updatedImportant,
            lastModified: Date.now(),
        }
            : note
    );
    setNotes(updatedNotes);
    setActiveNote(null);
    setNewTitle('');
    setNewDescription('');
    setNewImportant(false);
};


  return (
    <main className="flex flex-col items-center m-20">
      <div className="font-mono">Note Taking App</div>
      <Note
        newImportant={newImportant}
        setNewImportant={setNewImportant}
        activeNote={activeNote}
        handleUpdateNote={handleUpdateNote}
        onAddNote={onAddNote}
        newTitle={newTitle}
        setNewTitle={setNewTitle}
        newDescription={newDescription}
        setNewDescription={setNewDescription}
      />
      <div className="divider divider-secondary mb-7">Notes</div>
      <div className="mt-5">
        <NoteList
          onMarkImportant={onMarkImportant}
          notes={notes}
          onDeleteNote={onDeleteNote}
          activeNote={activeNote}
          setActiveNote={setActiveNote}
        />
      </div>
    </main>
  );
}
