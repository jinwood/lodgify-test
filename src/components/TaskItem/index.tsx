import { useContext } from "react";
import TasksContext, { Task } from "../../store/tasks-context";
import styles from "./TaskItem.module.css";

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
    <div className={styles["task"]}>
      <input
        className={styles["checkbox"]}
        type="checkbox"
        checked={task.checked}
        onChange={handleCheckedChange}
      />

      <p>{task.description}</p>
    </div>
  );
}
