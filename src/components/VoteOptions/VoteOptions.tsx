import type { VoteType } from "../../types/votes";
import css from "./VoteOptions.module.css";

interface VoteOptionsProps {
  resetVotes: () => void;
  onUpdate: (type: VoteType) => void;
  canReset: boolean;
}

export default function VoteOptions({
  resetVotes,
  onUpdate,
  canReset,
}: VoteOptionsProps) {
  const onVote = (type: VoteType) => {
    onUpdate(type);
  };

  const onReset = () => {
    resetVotes();
  };

  return (
    <>
      <div className={css.container}>
        <button onClick={() => onVote("good")} className={css.button}>
          Good
        </button>
        <button onClick={() => onVote("neutral")} className={css.button}>
          Neutral
        </button>
        <button onClick={() => onVote("bad")} className={css.button}>
          Bad
        </button>
        {canReset && (
          <button
            onClick={() => onReset()}
            className={`${css.button} ${css.reset}`}
          >
            Reset
          </button>
        )}
      </div>
    </>
  );
}
