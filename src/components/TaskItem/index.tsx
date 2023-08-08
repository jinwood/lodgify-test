import { Task } from "../../store/tasks-context";

interface Props {
  task: Task;
}
export default function TaskItem({ task }: Props) {
  return <>{task.description}</>;
}
