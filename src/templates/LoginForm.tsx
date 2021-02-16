import { Grid, makeStyles, Typography, useMediaQuery } from "@material-ui/core";
import AppTextField from "../components/Form/TextField";
import AppButton from "../components/Form/Button";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function LoginForm() {
  const useStyles = makeStyles((theme) => ({
    titles: {
      marginTop: theme.spacing(2),
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

  const classes = useStyles();

  const LoginSchema = Yup.object().shape({
    login: Yup.string().required(),
    password: Yup.string().required(),
  });

  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <Image src="/svg/hyrova.svg" alt="Hyrova logo" width={250} height={24} />
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
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <AppTextField
          id="login"
          label="Login"
          name="login"
          autoComplete="email"
          autoFocus
          formik={formik}
        />
        <AppTextField
          id="password"
          name="password"
          label="Mot de passe"
          type="password"
          autoComplete="current-password"
          formik={formik}
        />
        <Grid container justify="flex-end">
          <AppButton className={classes.submit}>Se connecter</AppButton>
        </Grid>
      </form>
    </>
  );
}
