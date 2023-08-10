import styles from "./ProgressBar.module.css";

interface Props {
  percentage: number;
}

export default function ProgressBar({ percentage }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.bar} style={{ width: `${percentage}%` }}>
        {percentage}%
      </div>
    </div>
  );
}
