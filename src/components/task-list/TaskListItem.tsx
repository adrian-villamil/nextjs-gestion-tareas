'use client';

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import clsx from "clsx";
import { FaPen, FaRegCheckCircle, FaRegCircle, FaRegTimesCircle, FaSave, FaTrash } from "react-icons/fa";
import { deleteTaskById, updateTaskById } from "@/actions";
import { Task } from "@/interfaces/task.interface";
import { Tooltip } from "../ui/tooltip/Tooltip";

interface FormInputs {
  completed: boolean;
  content: string;
}

interface Props {
  task: Task;
}

export const TaskListItem = ({ task }: Props) => {
  const [canEditTask, setCanEditTask] = useState(false);
  const { handleSubmit, register, formState: { errors } } = useForm<FormInputs>({
    defaultValues: {
      completed: task.completed,
      content: task.content,
    }
  })

  const onEdit = (status: boolean) => {
    setCanEditTask(status);
  };

  const onDelete = async () => {
    await deleteTaskById(task.id);
  };

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    const { completed, content } = data;
    const response = await updateTaskById(task.id, completed, content);

    if (response.ok) setCanEditTask(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={clsx(
        "flex items-center gap-2 border border-black/50 rounded-lg p-3",
        { "border-green-500": task.completed },
      )}
    >
      {/* ICONS - CONTENT */}
      {!canEditTask && (
        <>
          {task.completed ? (
            <span className="text-3xl text-green-500">
              <FaRegCheckCircle />
            </span>
          ) : (
            <span className="text-3xl text-gray-500">
              <FaRegCircle />
            </span>
          )}
          <p
            className={clsx(
              'w-full text-sm sm:text-base whitespace-nowrap overflow-hidden text-ellipsis',
              { 'text-gray-400 line-through italic': task.completed }
            )}
            title={task.content}
          >
            {task.content}
          </p>
        </>
      )}

      {/* INPUTS */}
      {canEditTask && (
        <>
          <input
            type="checkbox"
            className="scale-150 m-2"
            {...register('completed')}
          />
          <div className="w-full relative">
            <input
              type="text"
              className="w-full border border-black/50 rounded focus:outline-blue-500"
              {...register('content', { required: 'This field is required' })}
            />
            {errors.content && (
              <span className="absolute top-[calc(100%+8px)] left-0 p-2 border border-black/50 rounded text-sm text-red-600 bg-white">
                {errors.content.message}
              </span>
            )}
          </div>
        </>
      )}

      {/* ACTIONS */}
      <div className="flex gap-3">
        {!canEditTask && (
          <>
            <Tooltip title="Edit">
              <button
                type="button"
                className="rounded-full text-gray-600 bg-gray-200 hover:bg-blue-500 hover:text-white p-2 transition-all"
                onClick={() => onEdit(true)}
              >
                <FaPen />
              </button>
            </Tooltip>
            <Tooltip title="Delete">
              <button
                type="button"
                className="rounded-full text-gray-600 bg-gray-200 hover:bg-red-500 hover:text-white p-2 transition-all"
                onClick={onDelete}
              >
                <FaTrash />
              </button>
            </Tooltip>
          </>
        )}
        {canEditTask && (
          <>
            <Tooltip title="Save">
              <button
                type="submit"
                className="rounded-full text-gray-600 bg-gray-200 hover:bg-blue-500 hover:text-white p-2 transition-all"
              >
                <FaSave />
              </button>
            </Tooltip>
            <Tooltip title="Cancel">
              <button
                type="button"
                className="rounded-full text-gray-600 bg-gray-200 hover:bg-red-500 hover:text-white p-2 transition-all"
                onClick={() => setCanEditTask(false)}
              >
                <FaRegTimesCircle />
              </button>
            </Tooltip>
          </>
        )}
      </div>
    </form>
  );
};
