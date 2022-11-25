import React from "react";

export default function TodoItem({ item, handleIsDone, handleErase }) {
  return (
    <div className="flex my-4 border-b-2 pb-2" key={item.id}>
      <input
        onChange={() => handleIsDone(item)}
        defaultChecked={item.isDone}
        type="checkbox"
        id={"todo" + item.id}
        className="mr-2 w-5 accent-rose-600"
      />
      <label
        htmlFor={"todo" + item.id}
        className={`text-xl ${item.isDone ? "line-through" : ""}`}
      >
        {item.text}
      </label>
      <button
        className="ml-auto text-rose-700"
        onClick={() => handleErase(item)}
      >
        X
      </button>
    </div>
  );
}
