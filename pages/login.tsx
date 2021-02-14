import { Button } from "@material-ui/core";
import Head from "next/head";
import React from "react";
import styles from "../styles/pages/Login.module.scss";

function Login() {
  return (
    <>
      <Head>
        <title>Hyrova admin - login</title>
      </Head>
      <div className={styles.container}>

      </div>
    </>
  );
}

Login.layout = "guest";

export default Login;
