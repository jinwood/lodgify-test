import { taskApi } from "../data";
import { createContext, ReactNode, useState } from "react";

interface TasksContextType {
  progressTotal: number;
  tasks: Array<Group>;
  getTasks: () => Promise<void>;
  setTaskState: (groupName: string, task: Task) => void;
}

const TasksContext = createContext<TasksContextType>({
  progressTotal: 0,
  tasks: [],
  getTasks: async () => {},
  setTaskState: () => {},
});

export interface Task {
  description: string;
  value: number;
  checked: boolean;
}

export interface Group {
  name: string;
  tasks: Task[];
  collapsed: boolean;
}

interface Props {
  children: ReactNode;
}

export function TasksContextProvider({ children }: Props) {
  const [tasks, setTasks] = useState<Group[]>([]);
  const [progressTotal, setProgressTotal] = useState(0);

  async function getTasks() {
    const rawTasks = await taskApi.getTasks();

    let totalValue = 0;
    for (const group of rawTasks) {
      for (const task of group.tasks) {
        totalValue += task.value;
      }
    }

    const normalizationFactor = 100 / totalValue;

    let roundedTotal = 0;
    const normalizedTasks = rawTasks.map((group: Group) => ({
      ...group,
      collapsed: true,
      tasks: group.tasks.map((task) => {
        const roundedValue = Math.round(task.value * normalizationFactor);
        if (task.checked) {
          roundedTotal += roundedValue;
        }
        return {
          ...task,
          value: roundedValue,
        };
      }),
    }));

    setTasks(normalizedTasks);
    setProgressTotal(roundedTotal);
  }

  function setTaskState(groupName: string, task: Task) {
    const { description, checked, value } = task;
    const groupIndex = tasks.findIndex((g) => g.name === groupName);

    if (groupIndex === -1) {
      console.error("Group not found", groupName);
      return;
    }

    const taskIndex = tasks[groupIndex].tasks.findIndex(
      (t) => t.description === description
    );

    if (taskIndex === -1) {
      console.error("Task not found", description);
      return;
    }

    // create a deep copy of tasks array to avoid mutating the state directly
    const updatedTasks = [...tasks];
    updatedTasks[groupIndex] = {
      ...updatedTasks[groupIndex],
      tasks: [...updatedTasks[groupIndex].tasks],
    };

    const existingTask = updatedTasks[groupIndex].tasks[taskIndex];

    updatedTasks[groupIndex].tasks[taskIndex] = {
      ...existingTask,
      checked,
    };

    setTasks(updatedTasks);
    const newProgressTotal = checked
      ? progressTotal + value
      : progressTotal - value;

    setProgressTotal(newProgressTotal);
  }

  const context = {
    tasks,
    getTasks,
    setTaskState,
    progressTotal,
  };

  return (
    <TasksContext.Provider value={context}>{children}</TasksContext.Provider>
  );
}

export default TasksContext;
