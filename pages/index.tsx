import { Button } from "@material-ui/core";
import Head from "next/head";
import React from "react";
import { useAppContext } from "../src/context/state";
import styles from "../styles/pages/Home.module.scss";

export default function Home() {
  const { count, setcount } = useAppContext();

  const increment = () => {
    setcount(count + 1);
  };

  const decrement = () => {
    setcount(count - 1);
  };

  return (
    <div className={styles.container}>
      <p>{count}</p>
      <Button variant="contained" onClick={increment}>
        Increment
      </Button>
      <Button variant="contained" color="primary" onClick={decrement}>
        Decrement
      </Button>
    </div>
  );
}
