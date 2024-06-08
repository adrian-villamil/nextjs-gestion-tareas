'use client';

import clsx from "clsx";
import { deleteTaskById } from "@/actions/delete-task-by-id";
import { Task } from "@/interfaces/task.interface";
import { FaPen, FaTrash } from "react-icons/fa";

interface Props {
  task: Task;
}

export const TaskListItem = ({ task }: Props) => {
  
  const onDelete = async () => {
    await deleteTaskById(task.id);
  };

  return (
    <div className="flex items-center gap-2 border rounded-lg p-3">
      <input type="checkbox" name="" id="" className="scale-150 m-3" checked={task.completed} />
      <p className={clsx(
        'flex-1',
        { 'text-gray-400 line-through italic': task.completed }
      )}>{task.content}</p>
      <div className="flex gap-3">
        <button className="border rounded-full text-gray-600 bg-gray-200 hover:bg-blue-500 hover:text-white p-2 transition-all">
          <FaPen />
        </button>
        <button
          className="border rounded-full text-gray-600 bg-gray-200 hover:bg-red-500 hover:text-white p-2 transition-all"
          onClick={onDelete}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};
