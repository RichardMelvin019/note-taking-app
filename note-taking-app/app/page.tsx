"use client"

import Note from "./note/page";

export default function Home() {
  return (
    <main className="flex flex-col items-center m-20">
      <div className="font-mono">Note Taking App</div>
      <Note />
    </main>
  );
}
