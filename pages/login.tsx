import { Button } from "@material-ui/core";
import Head from "next/head";
import React from "react";
import styles from "../styles/pages/Login.module.scss";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(32),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    marginRight: theme.spacing(2),
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
    backgroundColor: theme.palette.grey[900],
    padding: theme.spacing(4),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    fontWeight: "bold",
  },
}));

function Login() {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>Hyrova admin - login</title>
      </Head>
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <Box display="flex" alignItems="center">
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Se connecter
            </Typography>
          </Box>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Login"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Mot de passe"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </div>
    </>
  );
}

Login.layout = "guest";

export default Login;
