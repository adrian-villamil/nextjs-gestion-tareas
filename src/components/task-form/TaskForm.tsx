'use client';

import { useState } from "react";

export const TaskForm = () => {
  const [description, setDescription] = useState('');

  return (
    <form className="flex gap-8">
      <input
        type="text"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Add a new todo..."
        className="border p-3 rounded-lg flex-1 focus:outline-blue-400"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white rounded-lg py-3 px-10"
      >
        Add
      </button>
    </form>
  );
};
