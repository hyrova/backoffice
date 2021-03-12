import { diff } from "deep-object-diff";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useFetch from "use-http";
import { User } from "../../../../../typescript/interfaces";
import AppButton from "../../../common/Form/Button";
import AppTextField from "../../../common/Form/TextField";
import * as Yup from "yup";
import { Grid, makeStyles } from "@material-ui/core";
import _ from "lodash";
import { useSnackbar } from "notistack";

const useStyles = makeStyles((theme) => ({
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

  const { loading, error, get, put, response } = useFetch(
    `http://localhost/api/admin/users/` + id
  );

  const fetchUser = async () => {
    const data = await get();

    if (response.ok) {
      setUser(data.data);
      formik.resetForm({
        values: {
          name: data.data.name,
          email: data.data.email,
        },
      });
    }
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
          setUser(data.data);
          actions.resetForm({
            values: {
              name: data.data.name,
              email: data.data.email,
            },
          });
          enqueueSnackbar("Utilisateur mis à jour avec succès", {
            variant: "success",
          });
        })
        .catch((err) => {
          enqueueSnackbar("Une erreur a eu lieu", { variant: "error" });
        });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <AppTextField
        id="standard-basic"
        name="name"
        label="Name"
        formik={formik}
      />
      <AppTextField
        name="email"
        id="standard-basic"
        label="Email"
        formik={formik}
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
  );
}
