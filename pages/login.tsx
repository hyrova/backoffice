import { Button } from "@material-ui/core";
import Head from "next/head";
import React from "react";
import styles from "../styles/pages/Login.module.scss";

function Login() {
  return <div className={styles.container}>login</div>;
}

Login.layout = "guest";

export default Login;
