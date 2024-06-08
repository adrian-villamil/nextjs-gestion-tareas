'use client';

import clsx from "clsx";
import { useState } from "react";
import { FaPen, FaTrash } from "react-icons/fa";

interface Props {
  content: string;
}

export const TaskListItem = ({ content }: Props) => {
  const [check, setCheck] = useState(false);
  return (
    <div className="flex items-center gap-2 border rounded-lg p-3">
      <input type="checkbox" name="" id="" className="scale-150 m-3" checked={check} onChange={(event) => setCheck(event.target.checked)} />
      <p className={clsx(
        'flex-1',
        { 'text-gray-400 line-through italic': check }
      )}>{content}</p>
      <div className="flex gap-3">
        <button className="border rounded-full text-gray-600 bg-gray-200 hover:bg-blue-500 hover:text-white p-2 transition-all">
          <FaPen />
        </button>
        <button className="border rounded-full text-gray-600 bg-gray-200 hover:bg-red-500 hover:text-white p-2 transition-all">
          <FaTrash />
        </button>
      </div>
    </div>
  );
};
