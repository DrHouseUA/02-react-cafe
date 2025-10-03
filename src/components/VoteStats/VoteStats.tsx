import type { Votes } from "../../types/votes";
import styles from "./VoteStats.module.css";

interface VoteStatProps {
  votes: Votes;
  totalVotes: number;
  positiveRate: number;
}

export default function VoteStats({
  votes: { good, bad, neutral },
  totalVotes,
  positiveRate,
}: VoteStatProps) {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.stat}>
          Good: <strong>{good}</strong>
        </p>
        <p className={styles.stat}>
          Neutral: <strong>{neutral}</strong>
        </p>
        <p className={styles.stat}>
          Bad: <strong>{bad}</strong>
        </p>
        <p className={styles.stat}>
          Total: <strong>{totalVotes}</strong>
        </p>
        <p className={styles.stat}>
          Positive: <strong>{positiveRate}%</strong>
        </p>
      </div>
    </>
  );
}
