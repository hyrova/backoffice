import { Button } from "@material-ui/core";
import Head from "next/head";
import React, { useEffect } from "react";
import { useAppContext } from "../src/context/state";
import styles from "../styles/pages/Home.module.scss";

export default function Home() {
  const { user } = useAppContext();

  return (
    <div className={styles.container}>
      {/* Pseudo :{user.pseudal} */}
      {/* <p>{count}</p>
      <Button variant="contained" onClick={increment}>
        Increment
      </Button>
      <Button variant="contained" color="primary" onClick={decrement}>
        Decrement
      </Button> */}
    </div>
  );
}
