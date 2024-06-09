import { getAllTasks } from "@/actions";
import { TaskForm, TaskList } from "@/components";

export default async function Home() {
  const tasks = await getAllTasks();

  return (
    <main>
      <div className="flex flex-col gap-12 w-full sm:max-w-screen-sm mt-20 mx-auto p-5">
        <h1 className="text-center text-4xl font-semibold">Task Managment</h1>
        <TaskForm />
        <TaskList tasks={tasks} />
      </div>
    </main>
  );
}
