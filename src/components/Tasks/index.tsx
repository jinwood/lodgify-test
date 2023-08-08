import { useContext, useEffect } from "react";
import TasksContext from "../../store/tasks-context";

export default function Tasks() {
  const tasksCtx = useContext(TasksContext);
  const { getTasks, tasks } = tasksCtx;

  useEffect(() => {
    getTasks();
  }, []);

  console.log("tasls", tasks);
  return <>{tasks.length}</>;
}
