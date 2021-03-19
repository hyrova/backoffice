import { diff } from "deep-object-diff";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useFetch from "use-http";
import { User } from "../../../../../typescript/interfaces";
import AppButton from "../../../common/Form/Button";
import AppTextField from "../../../common/Form/TextField";
import * as Yup from "yup";
import { Grid, makeStyles, CircularProgress } from "@material-ui/core";
import _ from "lodash";
import { useSnackbar } from "notistack";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
  },
  actions: {
    margin: theme.spacing(3, 0, 2),
  },
  button: {
    fontWeight: "bold",
    textTransform: "none",
  },
}));

export default function UserShow() {
  const { enqueueSnackbar } = useSnackbar();

  const classes = useStyles();
  const router = useRouter();
  const { id } = router.query;

  const [user, setUser] = useState<User>(null);

  const { loading, error, get, put, del, patch, response } = useFetch(
    `http://localhost/api/admin/users/` + id
  );

  const fetchUser = async () => {
    const data = await get();

    if (response.ok) {
      _setUser(data.data);
    }
  };

  const _setUser = (user) => {
    setUser(user);
    formik.resetForm({
      values: {
        name: user.name,
        email: user.email,
      },
    });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const LoginSchema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema: LoginSchema,
    onSubmit: async (values, actions) => {
      const change = diff(user, values);
      console.log({ change });
      await put(change)
        .then((data) => {
          _setUser(data.data);
          enqueueSnackbar("Utilisateur mis à jour avec succès", {
            variant: "success",
          });
        })
        .catch((err) => {
          enqueueSnackbar("Une erreur a eu lieu", { variant: "error" });
        });
    },
  });

  const _remove = () => {
    del().then((data) => {
      _setUser(data.data);
    });
  };

  const _restore = () => {
    patch().then((data) => {
      _setUser(data.data);
    });
  };

  if (!user) {
    return <CircularProgress />;
  }

  return (
    <>
      <Grid container justify="flex-end" className={classes.actions}>
        {user.trashed && (
          <AppButton
            className={classes.button}
            loading={loading}
            color="primary"
            onClick={_restore}
          >
            Débloquer
          </AppButton>
        )}
        {!user.trashed && (
          <AppButton
            className={classes.button}
            loading={loading}
            color="secondary"
            onClick={_remove}
          >
            Bloquer
          </AppButton>
        )}
      </Grid>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <AppTextField
          id="standard-basic"
          name="name"
          label="Name"
          disabled={user.trashed}
          formik={formik}
        />
        <AppTextField
          name="email"
          id="standard-basic"
          label="Email"
          formik={formik}
          disabled={user.trashed}
          type="email"
        />
        <Grid container justify="flex-end" className={classes.actions}>
          <AppButton
            className={classes.button}
            loading={formik.isSubmitting}
            disabled={!formik.dirty}
          >
            Sauvegarder
          </AppButton>
        </Grid>
      </form>
    </>
  );
}
