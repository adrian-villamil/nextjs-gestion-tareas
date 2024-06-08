import { TaskForm, TaskList } from "@/components";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col gap-8 w-[680px] min-h-[500px] mt-20 mx-auto p-5">
      <h1 className="text-center text-4xl font-semibold">Task Managment</h1>
        <TaskForm />
        <TaskList tasks={[]} />
      </div>
    </main>
  );
}
