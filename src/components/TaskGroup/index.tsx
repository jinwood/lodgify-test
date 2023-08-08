import { Group } from "../../store/tasks-context";
import TaskItem from "../TaskItem";

interface Props {
  taskGroup: Group;
}

export default function TaskGroup({ taskGroup }: Props) {
  return (
    <div>
      <p>{taskGroup.name}</p>
      {taskGroup.tasks.map((t) => (
        <TaskItem task={t} key={t.description} />
      ))}
    </div>
  );
}
