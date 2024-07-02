"use client"

import Note from "./note/page";
import NoteList from "./notelist/page";

export default function Home() {
  return (
    <main className="flex flex-col items-center m-20">
      <div className="font-mono">Note Taking App</div>
      <Note />
      <div className="divider divider-secondary mb-7">Notes</div>
      <div className="mt-5">
        <NoteList />
      </div>
    </main>
  );
}
