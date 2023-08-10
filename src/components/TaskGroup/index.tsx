import { Group } from "../../store/tasks-context";
import TaskItem from "../TaskItem";

interface Props {
  taskGroup: Group;
}

export default function TaskGroup({ taskGroup }: Props) {
  return (
    <div>
      <h3>{taskGroup.name}</h3>
      {taskGroup.tasks.map((t) => (
        <TaskItem task={t} key={t.description} groupName={taskGroup.name} />
      ))}
    </div>
  );
}
