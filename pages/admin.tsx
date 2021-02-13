import { Button } from "@material-ui/core";
import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
    </div>
  );
}

Home.layout = "guest";

export default Home;
