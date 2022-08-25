import { useState } from "react";
import type { NextPage } from "next";
import styles from "@styles/Home.module.css";
import Animation from "@components/Animation";
import Circle from "@components/Circle";

const Home: NextPage = () => {
  return (
    <main className={styles.container}>
      <Circle />
    </main>
  );
};

export default Home;
