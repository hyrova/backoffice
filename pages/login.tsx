import { Button, Grid, Card } from "@material-ui/core";
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

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(24),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: theme.palette.grey[900],
    width: "100%",
    maxWidth: 448,
    margin: "auto",
    padding: theme.spacing(6),
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(5),
  },
  titles: {
    marginTop: theme.spacing(2),
  },
  avatar: {
    // margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    marginRight: theme.spacing(2),
  },
  form: {
    paddingTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    fontWeight: "bold",
    textTransform: "none",
  },
}));

function Login() {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>Hyrova admin - login</title>
      </Head>
      <Card variant="outlined" className={classes.paper}>
        <Image
          src="/svg/hyrova.svg"
          alt="Hyrova logo"
          width={250}
          height={24}
        />
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          className={classes.titles}
        >
          <Typography component="h1" variant="h5">
            Connexion
          </Typography>
          <Typography
            component="span"
            variant="subtitle1"
            style={{ marginTop: 8 }}
          >
            Accéder à Hyrova
          </Typography>
        </Grid>
        <form className={classes.form} noValidate>
          <AppTextField
            required
            id="email"
            label="Login"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <AppTextField
            required
            id="password"
            name="password"
            label="Mot de passe"
            type="password"
            autoComplete="current-password"
          />
          <Grid container justify="flex-end">
            <AppButton className={classes.submit}>Se connecter</AppButton>
          </Grid>
        </form>
      </Card>
    </>
  );
}

Login.layout = "guest";
Login.auth = false;

export default Login;
