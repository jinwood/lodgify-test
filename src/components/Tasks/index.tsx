import { useContext, useEffect } from "react";
import TasksContext from "../../store/tasks-context";
import ProgressBar from "../ProgressBar";
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
      <h4 className={styles["heading"]}>Lodgify Grouped Tasks</h4>
      {<ProgressBar percentage={progressTotal} />}
      <div>
        {tasks.map((group) => (
          <TaskGroup taskGroup={group} key={group.name} />
        ))}
      </div>

      {/*JSON.stringify(tasks)*/}
    </div>
  );
}
