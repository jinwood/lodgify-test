import { useMemo, useState } from "react";
import { Group } from "../../store/tasks-context";
import ChevronDown from "../Icons/Chevron-Down";
import ChevronUp from "../Icons/Chevron-Up";
import Clipboard from "../Icons/Clipboard";
import ClipboardComplete from "../Icons/Clipboard-Complete";
import TaskItem from "../TaskItem";
import styles from "./TaskGroup.module.css";

interface Props {
  taskGroup: Group;
}

export default function TaskGroup({ taskGroup }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const { tasks } = taskGroup;
  const groupClickHandler = (e: any) => {
    setIsOpen(!isOpen);
  };

  const isComplete = useMemo(() => {
    return tasks.every((t) => t.checked);
  }, [tasks]);

  return (
    <div
      className={`${styles["task-group"]} ${
        styles[isOpen ? "task-group--visible" : "task-group--hidden"]
      }`}
    >
      <div className={styles["task-group-heading"]}>
        {isComplete ? <ClipboardComplete /> : <Clipboard />}
        <p
          className={`${isComplete ? styles["heading--complete"] : ""} ${
            styles["heading"]
          }`}
        >
          {taskGroup.name}
        </p>
        <p className={styles["show"]} onClick={groupClickHandler}>
          {isOpen ? "Hide" : "Show"} {isOpen ? <ChevronUp /> : <ChevronDown />}
        </p>
      </div>
      {taskGroup.tasks.map((t) => (
        <TaskItem task={t} key={t.description} groupName={taskGroup.name} />
      ))}
    </div>
  );
}
