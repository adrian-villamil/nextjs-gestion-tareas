'use client';

import { SubmitHandler, useForm } from "react-hook-form";
import { createTask } from "@/actions";

interface FormInputs {
  content: string;
}

export const TaskForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>({
    defaultValues: {
      content: '',
    }
  });

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    const { content } = data;

    const response = await createTask(content);

    if (response.ok) reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-8">
      <div className="flex-1 relative">
        <input
          type="text"
          placeholder="Add a new todo..."
          className="w-full border border-black/50 p-3 rounded-lg flex-1 focus:outline-blue-400"
          {...register('content', { required: 'This field is required' })}
        />
        {errors.content && <span className="absolute top-full left-0 text-red-600">{errors.content.message}</span>}
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-400 text-white rounded-lg py-3 px-10 transition-all"
      >
        Add
      </button>
    </form>
  );
};
