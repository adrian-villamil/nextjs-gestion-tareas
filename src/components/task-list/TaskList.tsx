import { Task } from "@/interfaces/task.interface";
import { TaskListItem } from "./TaskListItem";

interface Props {
  tasks: Task[];
}

export const TaskList = ({ tasks }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      {tasks.map((task) => (
        <TaskListItem key={task.id} task={task} />
      ))}
    </div>
  );
};
