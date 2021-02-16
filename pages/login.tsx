import { Button, Grid, Card, useMediaQuery } from "@material-ui/core";
import Head from "next/head";
import React from "react";
import styles from "../styles/pages/Login.module.scss";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import AppTextField from "../src/components/Form/TextField";
import AppButton from "../src/components/Form/Button";
import LoginForm from "../src/templates/LoginForm";
import MobileFullHeightCard from "../src/components/Card/MobileFullHeightCard";

function Login() {
  return (
    <>
      <Head>
        <title>Hyrova admin - login</title>
      </Head>
      <MobileFullHeightCard>
        <LoginForm />
      </MobileFullHeightCard>
    </>
  );
}

Login.layout = "guest";
Login.auth = false;

export default Login;
