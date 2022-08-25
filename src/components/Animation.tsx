import { useState } from "react";
import type { NextPage } from "next";
import styles from "@styles/Home.module.css";

interface Props {}

interface States {
  dropped: boolean;
}

const Animation: NextPage<Props, States> = () => {
  const [dropped, setDropped] = useState(false);

  return (
    <div
      className={`${styles.card} ${dropped ? styles.dropped : styles.inDeck}`}
      onClick={() => setDropped(!dropped)}
    />
  );
};

export default Animation;
