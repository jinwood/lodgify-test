import { useContext, useEffect } from "react";
import TasksContext from "../../store/tasks-context";
import TaskGroup from "../TaskGroup";

export default function Tasks() {
  const tasksCtx = useContext(TasksContext);

  const { getTasks, tasks, setTaskState } = tasksCtx;
  useEffect(() => {
    getTasks();
  }, []);

  const setTask = () => {
    setTaskState("Add name and surname", "General Info", true);
  };

  return (
    <>
      {tasks.map((group) => (
        <TaskGroup taskGroup={group} key={group.name} />
      ))}

      <button onClick={setTask}>click</button>
    </>
  );
}
