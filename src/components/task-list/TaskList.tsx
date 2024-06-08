import { Task } from "@/interfaces/task.interface";
import { TaskListItem } from "./TaskListItem";

interface Props {
  tasks: Task[];
}

const myTasks = Array.from({ length: 8 }).map((v, i) => ({ id: i, content: `Task # ${i + 1}` }));

export const TaskList = ({ tasks }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      {myTasks.map((task) => (
        <TaskListItem key={task.id} content={task.content} />
      ))}
    </div>
  );
};
