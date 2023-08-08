import { createContext, ReactNode, useState } from "react";
import { taskApi } from "../data";

interface TasksContextType {
  tasks: Array<any>;
  getTasks: () => Promise<void>;
}

const TasksContext = createContext<TasksContextType>({
  tasks: [],
  getTasks: async () => {},
});

export interface Task {
  description: string;
  value: number;
  checked: boolean;
}

export interface TaskGroup {
  name: string;
  tasks: Task[];
}

interface Props {
  children: ReactNode;
}

export function TasksContextProvider({ children }: Props) {
  const [tasks, setTasks] = useState([]);
  async function getTasks() {
    const tasks = await taskApi.getTasks();

    setTasks(tasks);
  }

  const context = {
    tasks,
    getTasks,
  };

  return (
    <TasksContext.Provider value={context}>{children}</TasksContext.Provider>
  );
}

export default TasksContext;
