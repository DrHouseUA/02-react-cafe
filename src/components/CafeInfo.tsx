// import { useState } from 'react'
import css from "./CafeInfo.module.css";

export default function CafeInfo() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className={css.container}>
        <h1 className={css.title}>Sip Happens Café</h1>
        <p className={css.description}>
          Please rate our service by selecting one of the options below.
        </p>
      </div>
    </>
  );
}
