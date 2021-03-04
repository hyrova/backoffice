import { Grid, makeStyles, Typography } from "@material-ui/core";
import AppTextField from "../../../common/Form/TextField";
import AppButton from "../../../common/Form/Button";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import useFetch from "use-http";
import { useAppContext } from "../../../../context/state";
import { useRouter } from "next/router";

export default function LoginForm() {
  const { post, response, loading, error } = useFetch(
    "http://localhost/api/login"
  );
  const { settoken } = useAppContext();
  const router = useRouter();

  const useStyles = makeStyles((theme) => ({
    titles: {
      marginTop: theme.spacing(2),
    },
    form: {
      paddingTop: theme.spacing(3),
    },
    actions: {
      margin: theme.spacing(3, 0, 2),
    },
    button: {
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
      _login(values);
    },
  });

  const _login = async (credentials) => {
    // TODO detect device
    const token = await post({ ...credentials, device: "device" });

    if (response.ok) {
      settoken(token);
      router.replace("/");
    }
  };

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
        {error && (
          <Typography variant="caption" color="error">
            Identifiants incorrects
          </Typography>
        )}
        <AppTextField
          id="login"
          label="Login"
          name="login"
          autoComplete="email"
          autoFocus
          formik={formik}
          disabled={loading}
        />
        <AppTextField
          id="password"
          name="password"
          label="Mot de passe"
          type="password"
          autoComplete="current-password"
          formik={formik}
          disabled={loading}
        />
        <Grid container justify="flex-end" className={classes.actions}>
          <AppButton className={classes.button} loading={loading}>
            Se connecter
          </AppButton>
        </Grid>
      </form>
    </>
  );
}
