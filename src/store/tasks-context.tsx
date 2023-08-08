import { taskApi } from "../data";
import { createContext, ReactNode, useState } from "react";

interface TasksContextType {
  tasks: Array<Group>;
  getTasks: () => Promise<void>;
  setTaskState: (
    taskDescription: string,
    groupName: string,
    checked: Boolean
  ) => void;
}

const TasksContext = createContext<TasksContextType>({
  tasks: [],
  getTasks: async () => {},
  setTaskState: () => {},
});

export interface FindTask extends Task {
  groupName: string;
}

export interface Task {
  description: string;
  value: number;
  checked: boolean;
}

export interface Group {
  name: string;
  tasks: Task[];
}

interface Props {
  children: ReactNode;
}

export function TasksContextProvider({ children }: Props) {
  const [tasks, setTasks] = useState<Group[]>([]);

  async function getTasks() {
    const tasks = await taskApi.getTasks();

    setTasks(tasks);
  }

  function setTaskState(
    taskDescription: string,
    groupName: string,
    checked: Boolean
  ) {
    console.log(tasks);
    const group = tasks.find((g) => g.name === groupName);

    if (!group) {
      console.error("Group not found", groupName);
    }

    const task = group?.tasks.find((t) => t.description === taskDescription);
    console.log("found task", task);
  }

  const context = {
    tasks,
    getTasks,
    setTaskState,
  };

  return (
    <TasksContext.Provider value={context}>{children}</TasksContext.Provider>
  );
}

export default TasksContext;
