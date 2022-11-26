import React, { useState } from "react";

export default function TodoForm({ handleAddTodo }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (input) {
      handleAddTodo({ text: input, isDone: false, id: Math.random() });
      setInput("");
    } else return alert("invalid input");
  }

  return (
    <section>
      <form
        className="flex justify-center items-center gap-7"
        onSubmit={handleSubmit}
      >
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          placeholder="Add a task"
          className="rounded p-2 text-xl flex-grow-3 w-full"
        />
        <button
          type="submit"
          className="bg-rose-500 rounded text-white text-base px-6 py-3"
        >
          Add
        </button>
      </form>
    </section>
  );
}
