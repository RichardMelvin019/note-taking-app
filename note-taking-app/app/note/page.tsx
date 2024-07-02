"use client"

const Note = () => {
  return (
    <div>
      <div className="flex flex-row m-3 space-x-4 justify-center">
        <input
          type="text"
          id="title"
          placeholder="Title"
          className="input input-bordered input-primary w-96"
        />
        <textarea
          id="description"
          placeholder="Note Description"
          className="textarea textarea-primary textarea-bordered textarea-xs w-96 "
        />
      </div>
      <div className="form-control">
        <label className="cursor-pointer space-x-4">
          <input type="checkbox" id="important" className="checkbox checkbox-secondary" />
          <span className="label-text">Mark as Important</span>
        </label>
      </div>
      <div className="flex flex-row justify-center">
        <button
          type="submit"
          id="submit"
          className="btn btn-outline btn-secondary m-2"
          onClick={() => alert("Note successfully added")}
        >
          Add Note
        </button>
      </div>
    </div>
  );
};

export default Note;
