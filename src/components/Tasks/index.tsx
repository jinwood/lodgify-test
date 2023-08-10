import { useContext, useEffect } from "react";
import TasksContext from "../../store/tasks-context";
import TaskGroup from "../TaskGroup";
import styles from "./Tasks.module.css";

export default function Tasks() {
  const tasksCtx = useContext(TasksContext);

  const { getTasks, tasks, progressTotal } = tasksCtx;
  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className={styles["task-wrapper"]}>
      <p>Total: {progressTotal}</p>
      {tasks.map((group) => (
        <TaskGroup taskGroup={group} key={group.name} />
      ))}

      {/*JSON.stringify(tasks)*/}
    </div>
  );
}
