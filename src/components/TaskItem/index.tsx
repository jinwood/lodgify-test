import { useContext } from "react";
import TasksContext, { Task } from "../../store/tasks-context";

interface Props {
  task: Task;
  groupName: string;
}
export default function TaskItem({ task, groupName }: Props) {
  const tasksCtx = useContext(TasksContext);
  const { setTaskState } = tasksCtx;

  const handleCheckedChange = (e: any) => {
    const checked = e.target.checked;
    const { description, value } = task;

    setTaskState(groupName, { checked, description, value });
  };

  return (
    <>
      <p>
        {task.description} -{" "}
        <input
          type="checkbox"
          checked={task.checked}
          onChange={handleCheckedChange}
        />
      </p>
      <p>{task.value}</p>
    </>
  );
}
