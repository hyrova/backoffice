import React from "react";
import { useAppContext } from "../src/context/state";
import styles from "../styles/pages/Home.module.scss";

function Home() {
  const { user } = useAppContext();

  return (
    <div className={styles.container}>{user && <p>Pseudo :{user.name}</p>}</div>
  );
}

Home.auth = true;

export default Home;
