import { Grid, makeStyles, Typography } from "@material-ui/core";
import AppTextField from "../../../common/Form/TextField";
import AppButton from "../../../common/Form/Button";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import useFetch from "use-http";
import { useAppContext } from "../../../../context/state";
import { useRouter } from "next/router";
import Pagination from "@material-ui/lab/Pagination";

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

export default function UsersList() {
  const { settoken } = useAppContext();
  const router = useRouter();
  const classes = useStyles();
  const { post, response, loading, error } = useFetch("/admin/users");

  // const _login = async (credentials) => {
  //   // TODO detect device
  //   const token = await post({ ...credentials, device: "device" });

  //   if (response?.ok) {
  //     settoken(token);
  //     router.replace("/");
  //   }
  // };

  return (
    <>
      <Pagination count={10} siblingCount={0} />
    </>
  );
}
